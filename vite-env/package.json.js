const file =
    [
        {
            "scripts": {
                "dev": "vite",

                "build": "tsc && vite build",  
                //if only .env file is present without other file then it is for both production and development
                //if only .env file and .env.production is present then .env.production is for production and .env is for development

                //if all files are present based on build cmd it works
                "build:dev": "tsc && vite build --mode development",
                "build:prod": "tsc && vite build --mode production",
                "build:stage": "tsc && vite build --mode staging",
                "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
                "preview": "vite preview"
            }
        }]