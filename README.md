# DevSecOps Node.js App 🚀

## Overview
This project demonstrates a full DevSecOps CI/CD pipeline using:
- SonarQube (SAST)
- Trivy (Container Vulnerability Scanning)
- OWASP Dependency-Check (Dependency scanning)
- Dockerized Node.js App
- GitHub Actions CI/CD

## Pipeline Architecture
[Insert image here]

## Features
✔️ Static Analysis  
✔️ Dependency Scanning  
✔️ Image Scanning  
✔️ Deployment blocked on failure  
✔️ Docker + Node.js  

## How It Works
1. Code is pushed → pipeline runs  
2. SAST, Dependency, Container scans execute  
3. Pipeline stops if any HIGH or CRITICAL vulnerabilities found  
4. If all pass → deployment allowed  

## Commands
- `npm install`
- `npm start`
- `docker build -t devsecops-nodejs-app .`
- `docker run -p 3000:3000 devsecops-nodejs-app`

## Screenshots
- SonarQube dashboard
- Trivy report
- Dependency-Check report

## Author
Jesutofunmi Adeboye
