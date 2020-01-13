:: bundle config-page
start cmd.exe /k webpack --mode production --config-name app-config --progress --color
:: bundle data-page
start cmd.exe /k webpack --mode production --config-name app-data --progress --color
:: bundle runtime-page
start cmd.exe /k webpack --mode production --config-name app-runtime --progress --color
:: bundle trend-page
::start cmd.exe /k webpack --mode production --config-name app-trend --progress --color
:: bundle alarm-page
::start cmd.exe /k webpack --mode production --config-name app-alarm --progress --color
:: bundle param-page
::start cmd.exe /k webpack --mode production --config-name app-param --progress --color

