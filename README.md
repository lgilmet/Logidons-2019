# Logidons-2019
Site web de gestion de dons et de distribution de donations. 

REQUISITES - 
Visual Studio Community - C#
Microsft SQL Management Studio
ASP.Net Core 2.2 - SDK 2.2.101

Avant d'ouvrire le projet
Creer le fichier 
appsettings.json
contenant:

{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "IdentityConnection": "Server=DESKTOP-0LBFTTV; Database=UserDB; Trusted_Connection=True; MultipleActiveResultSets=True;"
  }
}
