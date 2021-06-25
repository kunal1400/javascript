/**
* In settings_schema.json 
* write this kind of settings because blocks are not supported
**/
{
    "name": "Prebuilt Designs",
    "settings": [
      {
        "type": "header",
        "content": "Design 1 Settings"
      },
      {
        "type": "text",
        "id": "design_1_name",
        "label": "Design 1 Name",        
        "default": "Design 1 Name"
      },      
      {
        "type": "image_picker",
        "id": "design_1_image",
        "label": "Design 1 Image"
      },
      {
        "type": "textarea",
        "id": "design_1_json",
        "label": "JSON Object for Design",
        "default": "{\"songID\":\"id\",\"waveType\":\"linear\",\"canvasWidth\":210,\"canvasHeight\":280,\"direction\":\"portrait\",\"waveSettings\":{\"thickness\":100,\"spacing\":2,\"sharpness\":0.9,\"verticalSpace\":0.2,\"horizontalSpace\":0.1,\"height\":1,\"waveformColorType\":\"solid\",\"colors\":[[0,0,0],[0,0,0],[0,0,0]],\"waveformColorImage\":\"\"},\"showArtistText\":true,\"artistText\":\"\",\"artistTextSize\":30,\"artistTextFont\":\"Montserrat\",\"artistTextColor\":[0,0,0],\"showNameText\":false,\"nameText\":\"\",\"nameTextSize\":50,\"nameTextFont\":\"Montserrat\",\"nameTextColor\":[0,0,0],\"showCustomText\":false,\"customText\":\"\",\"customTextSize\":20,\"customTextFont\":\"Montserrat\",\"customTextColor\":[0,0,0],\"textVerticalPosition\":\"bottom\",\"textHorizontalPosition\":\"center\",\"showBackgroundImage\":false,\"backgroundImage\":\"\",\"showBackgroundColor\":true,\"backgroundColor\":[255,255,255]}"
      },
      {
        "type": "header",
        "content": "Design 2 Settings"
      },
      {
        "type": "text",
        "id": "design_2_name",
        "label": "Design 2 Name",        
        "placeholder": "Design 2 Name"
      },      
      {
        "type": "image_picker",
        "id": "design_2_image",
        "label": "Design 2 Image"
      },
      {
        "type": "textarea",
        "id": "design_2_json",
        "label": "JSON Object for Design",
        "default": "{\"songID\":\"id\",\"waveType\":\"linear\",\"canvasWidth\":210,\"canvasHeight\":280,\"direction\":\"portrait\",\"waveSettings\":{\"thickness\":100,\"spacing\":2,\"sharpness\":0.9,\"verticalSpace\":0.2,\"horizontalSpace\":0.1,\"height\":1,\"waveformColorType\":\"solid\",\"colors\":[[0,0,0],[0,0,0],[0,0,0]],\"waveformColorImage\":\"\"},\"showArtistText\":true,\"artistText\":\"\",\"artistTextSize\":30,\"artistTextFont\":\"Montserrat\",\"artistTextColor\":[0,0,0],\"showNameText\":false,\"nameText\":\"\",\"nameTextSize\":50,\"nameTextFont\":\"Montserrat\",\"nameTextColor\":[0,0,0],\"showCustomText\":false,\"customText\":\"\",\"customTextSize\":20,\"customTextFont\":\"Montserrat\",\"customTextColor\":[0,0,0],\"textVerticalPosition\":\"bottom\",\"textHorizontalPosition\":\"center\",\"showBackgroundImage\":false,\"backgroundImage\":\"\",\"showBackgroundColor\":true,\"backgroundColor\":[255,255,255]}"
      },
      {
        "type": "header",
        "content": "Design 3 Settings"
      },
      {
        "type": "text",
        "id": "design_3_name",
        "label": "Design 3 Name",        
        "placeholder": "Design 3 Name"
      },      
      {
        "type": "image_picker",
        "id": "design_3_image",
        "label": "Design 3 Image"
      },
      {
        "type": "textarea",
        "id": "design_3_json",
        "label": "JSON Object for Design",
        "default": "{\"songID\":\"id\",\"waveType\":\"linear\",\"canvasWidth\":210,\"canvasHeight\":280,\"direction\":\"portrait\",\"waveSettings\":{\"thickness\":100,\"spacing\":2,\"sharpness\":0.9,\"verticalSpace\":0.2,\"horizontalSpace\":0.1,\"height\":1,\"waveformColorType\":\"solid\",\"colors\":[[0,0,0],[0,0,0],[0,0,0]],\"waveformColorImage\":\"\"},\"showArtistText\":true,\"artistText\":\"\",\"artistTextSize\":30,\"artistTextFont\":\"Montserrat\",\"artistTextColor\":[0,0,0],\"showNameText\":false,\"nameText\":\"\",\"nameTextSize\":50,\"nameTextFont\":\"Montserrat\",\"nameTextColor\":[0,0,0],\"showCustomText\":false,\"customText\":\"\",\"customTextSize\":20,\"customTextFont\":\"Montserrat\",\"customTextColor\":[0,0,0],\"textVerticalPosition\":\"bottom\",\"textHorizontalPosition\":\"center\",\"showBackgroundImage\":false,\"backgroundImage\":\"\",\"showBackgroundColor\":true,\"backgroundColor\":[255,255,255]}"
      }
    ]
  }





/*****************************************************************************************************************
* Now in any file you can get these settings in javascript
*****************************************************************************************************************/

/*** #1 ***/
<script type="text/javascript">
  let presetJsons = []
</script>

/*** #2 ***/
{% for i in (1..10) %}
  {% capture settingName %}design_{{ i }}_name{% endcapture %}
  {% capture settingImage %}design_{{ i }}_image{% endcapture %}
  {% capture settingJson %}design_{{ i }}_json{% endcapture %}
  {% if settings[settingJson] != nil %}
    <script type="text/javascript">
      presetJsons.push( {{settings[settingJson]}} )
    </script>
  {% endif %}
{% endfor %}

/*** #3 ***/
// Checking if preset is set or not
let settingJsonIndex = getParameterByName('preset')      
if ( !isNaN(settingJsonIndex) && settingJsonIndex > 0 ) {
  let waveJsonToSet = presetJsons[settingJsonIndex -1]
  console.log(waveJsonToSet, "default waveJsonToSet")
}
/*****************************************************************************************************************
* END
*****************************************************************************************************************/
