## Instrucciones y Notas

## En esta sesión...
1. Instalar playwright
   - `npm init playwright@latest`
2. Comprobar si se instaló correctamente
   - `npx playwright --help`


## En esta sesión...
Configuración de la Estructura de Carpetas
Creemos la siguiente estructura de carpetas:

PLAYWRIGHT-E2E-TESTS/
├── .github/                    # Carpeta de Configuración de CI (Integración Continua)
├── .vscode/                    # Configuración específica del editor
│   └── mcp.json                # Configuración del servidor MCP para VS Code
├── config/                     # Archivos de configuración específicos del entorno
├── data/                       # Datos estáticos y constantes
│   └── constants.json          # Constantes comunes utilizadas en las pruebas
├── debug/                      # Opcional: Salidas/registros relacionados con la depuración
├── logs/                       # Registros (logs) de la aplicación/pruebas
├── node_modules/               # Dependencias auto-generadas
├── playwright-report/          # Salida del informe de pruebas HTML de Playwright
├── resources/                  # Recursos misceláneos de las pruebas (ej: imágenes, archivos)
├── tests/                      # Todos los archivos de prueba organizados
│   ├── api/                    # Especificaciones de pruebas de API
│   ├── demo/                   # Especificaciones de pruebas relacionadas con demostraciones
│   ├── devices/                # Escenarios relacionados con dispositivos
│   ├── e2e/                    # Especificaciones de pruebas de extremo a extremo
│   ├── functional/             # Casos de prueba funcionales
│   ├── helpers/                # Funciones de utilidad para las pruebas
│   ├── page-objects/           # Archivos del Modelo de Objeto de Página (Page Object Model)
├── tests-examples/             # Escenarios de prueba de ejemplo auto-generados
├── .env.example                # Plantilla para archivos de entorno
├── .env                        # Plantilla para archivos de entorno
├── .gitignore                  # Archivos y carpetas ignorados por Git
├── package-lock.json           # Archivo de bloqueo de dependencias
├── package.json                # Metadatos y scripts del proyecto
├── playwright.config.ts        # Archivo de configuración de Playwright
├── README.md                   # Resumen e instrucciones del proyecto


Verificación Rápida
En el archivo playwright.config.ts, comenta todos los demás navegadores y asegúrate de que solo chromium esté habilitado.

Ejecuta el siguiente comando para verificar que todo siga funcionando:
npx playwright test --headed

Si las pruebas se ejecutan con éxito, ¡estás listo!

🎯 La estructura del proyecto objetivo ya está configurada. ¡Sigamos avanzando! 🚀