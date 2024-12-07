$fontsPath = "src/app/fonts"
$geistSansUrl = "https://raw.githubusercontent.com/vercel/geist-font/main/packages/next/dist/fonts/GeistVF.woff2"
$geistMonoUrl = "https://raw.githubusercontent.com/vercel/geist-font/main/packages/next/dist/fonts/GeistMonoVF.woff2"

# Create fonts directory if it doesn't exist
if (-not (Test-Path $fontsPath)) {
    New-Item -ItemType Directory -Path $fontsPath -Force
}

# Download fonts
Invoke-WebRequest -Uri $geistSansUrl -OutFile "$fontsPath/GeistVF.woff"
Invoke-WebRequest -Uri $geistMonoUrl -OutFile "$fontsPath/GeistMonoVF.woff"

Write-Host "Fonts downloaded successfully!"
