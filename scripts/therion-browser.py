#!/usr/bin/env python3
"""
⚔️ THERION WEB AUTOMATION ⚔️
Python-based browser control for OpenClaw/THERION
Uses Playwright for headless browser automation
"""

import sys
import json
import argparse
from typing import Dict, Any

def install_check():
    """Check if playwright is installed"""
    try:
        from playwright.sync_api import sync_playwright
        return True
    except ImportError:
        return False

def browser_navigate(url: str, wait_for: str = "load", screenshot: str = None) -> Dict[str, Any]:
    """Navigate to URL and optionally take screenshot"""
    try:
        from playwright.sync_api import sync_playwright
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url, wait_until=wait_for)
            
            result = {
                "url": page.url,
                "title": page.title(),
                "status": "success"
            }
            
            if screenshot:
                page.screenshot(path=screenshot)
                result["screenshot"] = screenshot
                
            browser.close()
            return result
    except Exception as e:
        return {"status": "error", "error": str(e)}

def browser_extract(url: str, selector: str = None, text: bool = True) -> Dict[str, Any]:
    """Extract content from webpage"""
    try:
        from playwright.sync_api import sync_playwright
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url, wait_until="networkidle")
            
            if selector:
                elements = page.query_selector_all(selector)
                if text:
                    content = [el.inner_text() for el in elements]
                else:
                    content = [el.inner_html() for el in elements]
            else:
                content = page.content() if not text else page.inner_text("body")
            
            result = {
                "url": page.url,
                "title": page.title(),
                "content": content,
                "status": "success"
            }
            
            browser.close()
            return result
    except Exception as e:
        return {"status": "error", "error": str(e)}

def browser_click(url: str, selector: str, wait_after: int = 1000) -> Dict[str, Any]:
    """Click element on page"""
    try:
        from playwright.sync_api import sync_playwright
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url, wait_until="networkidle")
            page.click(selector)
            page.wait_for_timeout(wait_after)
            
            result = {
                "url": page.url,
                "title": page.title(),
                "status": "success",
                "action": f"clicked {selector}"
            }
            
            browser.close()
            return result
    except Exception as e:
        return {"status": "error", "error": str(e)}

def browser_fill(url: str, selector: str, text: str, submit: bool = False) -> Dict[str, Any]:
    """Fill form field"""
    try:
        from playwright.sync_api import sync_playwright
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url, wait_until="networkidle")
            page.fill(selector, text)
            
            if submit:
                page.keyboard.press("Enter")
                page.wait_for_load_state("networkidle")
            
            result = {
                "url": page.url,
                "title": page.title(),
                "status": "success",
                "action": f"filled {selector}"
            }
            
            browser.close()
            return result
    except Exception as e:
        return {"status": "error", "error": str(e)}

def main():
    parser = argparse.ArgumentParser(description="THERION Browser Automation")
    parser.add_argument("action", choices=["check", "navigate", "extract", "click", "fill"],
                       help="Action to perform")
    parser.add_argument("--url", help="Target URL")
    parser.add_argument("--selector", help="CSS selector")
    parser.add_argument("--text", help="Text to fill")
    parser.add_argument("--screenshot", help="Screenshot path")
    parser.add_argument("--submit", action="store_true", help="Submit after fill")
    parser.add_argument("--json", action="store_true", help="Output JSON")
    
    args = parser.parse_args()
    
    if args.action == "check":
        installed = install_check()
        if args.json:
            print(json.dumps({"installed": installed}))
        else:
            if installed:
                print("✅ Playwright installed and ready")
            else:
                print("❌ Playwright not installed. Run: pip install playwright && playwright install chromium")
        sys.exit(0 if installed else 1)
    
    if not args.url:
        print("Error: --url required", file=sys.stderr)
        sys.exit(1)
    
    result = None
    
    if args.action == "navigate":
        result = browser_navigate(args.url, screenshot=args.screenshot)
    elif args.action == "extract":
        result = browser_extract(args.url, selector=args.selector)
    elif args.action == "click":
        if not args.selector:
            print("Error: --selector required for click", file=sys.stderr)
            sys.exit(1)
        result = browser_click(args.url, args.selector)
    elif args.action == "fill":
        if not args.selector or not args.text:
            print("Error: --selector and --text required for fill", file=sys.stderr)
            sys.exit(1)
        result = browser_fill(args.url, args.selector, args.text, submit=args.submit)
    
    if result:
        print(json.dumps(result, indent=2))
        sys.exit(0 if result.get("status") == "success" else 1)

if __name__ == "__main__":
    main()
