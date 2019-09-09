# Logidons-2019
Site web de gestion de dons et de distribution de donations. 

REQUISITES - 
Visual Studio Community 2017 - C#
Microsft SQL Management Studio
ASP.Net Core 2.2 - SDK 2.2.101
https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.101-windows-x64-installer

Avant d'ouvrire le projet
Creer le fichier 
appsettings.json
dans le dossier WebAPI
contenant:

{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "IdentityConnection": "Server=NON_DE_VOTRE_SERVER; Database=LOGIDONS; Trusted_Connection=True; MultipleActiveResultSets=True;"
  }
}

