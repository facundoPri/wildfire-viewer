# Documentación

## Formato de Archivos
Los incendios se encuentran en archivos JSON. Estos están en `API/YYYY-MM-DD/THH.json`.

Dentro de cada archivo, se cuenta con los siguientes atributos:

```json
{
    "data": {
        "getPublicWildfireByDate": {
            "nextToken": null,
            "items": [
                {
                    "cat": "null",
                    "conf": "number",
                    "date": "string",
                    "id": "string",
                    "sat": "string",
                    "x": "number",
                    "y": "number"
                }
            ]
        }
    }
}
```

## Atributos
### sat
Este valor indica de que satélite proviene el incendio. Los valores posibles son los siguientes:
```json
["VIIRS Suomi NPP", "VIIRS NOAA-20", "MODIS Aqua", "MODIS Terra", "noaa-goes16", "noaa-goes17"]
```
### conf
Es la confiabilidad de que un punto sea un incendio o no. Bajo este valor se debe mostrar en el mapa por color. Los valores posibles para la confiabilidad dependen de cada satélite:

```js
//Categorías para el noaa-goes16 y noaa-goes17 (mismas categorías para ambos satélites):

export const GOESCategories = {
   10: "Procesado",
   30: "Procesado",
   11: "Saturado",
   31: "Saturado",
   12: "Contaminado por nubes",
   32: "Contaminado por nubes",
   13: "Probabilidad alta",
   33: "Probabilidad alta",
   14: "Probabilidad media",
   34: "Probabilidad media",
   15: "Probabilidad baja",
   35: "Probabilidad baja"
};

// Categorías para el VIRRS Suomi NPP y VIIRS NOAA-20
export const VIIRSCategories = {
   20: "Probabilidad baja",
   50: "Probabilidad media",
   90: "Probabilidad alta",
};

```

En cuanto a los satélites MODIS, `conf` es el número de probabilidad, que puede tomar valores de `0` a `100`.

### date
Se encuentra en el formato `YYYY-MM-DDTHH`. Siendo `YYYY` el año, `MM` el mes, `DD` el día y `HH` la hora.

### id
Se encuentra en el formato `YYYY-MM-DDTHH:mm:ss+00:00+NUM+NUM`. Siendo `YYYY` el año, `MM` el mes, `DD` el día y `HH` la hora, `mm` el minuto, `ss` el segundo. El resto del string se puede ignorar, ya que indica el huso horario y valores para referencia en la base de datos.

### x
Es la coordenada `x` en el mapa.

### y
Es la coordenada `y` en el mapa.