const file =
    [
        {
            "scripts": {
                "dev": "vite",
                "build": "tsc && vite build",   //this always runs for production env whild build
                "build:dev": "tsc && vite build --mode development",
                "build:prod": "tsc && vite build --mode production",
                "build:stage": "tsc && vite build --mode staging",
                "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
                "preview": "vite preview"
            }
        }]