ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "30",
  "id": "DateRangeScroller",
  "package": "basics",
  "parentControl": "sap.suite.ui.commons.DateRangeScroller",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "dateformatter",
      "space": "known"
    },
    {
      "id": "sap_suite_loader",
      "space": "known"
    }
  ],
  "title": "Date Range Scroller 2.0",
  "tooltip": "Date Range Scroller",
  "width": "300"
},

"spec" : 
{
  "DDate": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "desc": "Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Value (yyyymmdd)",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DEndDate": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "desc": "End Date",
      "noAps": true,
      "noZtl": false,
      "tooltip": "End Date Value (yyyymmdd)",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DLangFormat": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Format",
      "desc": "Language Dependent Format",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Language Dependent Format",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "DLangPattern": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Custom",
      "desc": "Custom Pattern",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Custom Format Pattern",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "DLangRelative": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Custom",
      "desc": "Custom Relative",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Custom Format Relative",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "DLangStyle": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Custom",
      "choiceType": "FormatStyle",
      "desc": "Custom Style",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Short",
          "text": "Short"
        },
        {
          "key": "Medium",
          "text": "Medium"
        },
        {
          "key": "Long",
          "text": "Long"
        }
      ],
      "tooltip": "Custom Format Style",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Short",
    "visible": true
  },
  "DSpecialDay": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Custom",
      "desc": "Day Of Week To Start",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Week Day, 0 - Sunday To 6 - Saturday",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "0",
    "visible": true
  },
  "DSpecialDuration": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Custom",
      "desc": "Duration Of Custom Range",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Duration Of Custom Range (Custom*)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "14",
    "visible": true
  },
  "DStartDate": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Date",
      "desc": "Start Date",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Start Date Value (yyyymmdd)",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": false
  },
  "DViewType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Date",
      "choiceType": "DateViewType",
      "desc": "Range View Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Day",
          "text": "Day"
        },
        {
          "key": "Week",
          "text": "Week"
        },
        {
          "key": "Month",
          "text": "Month"
        },
        {
          "key": "Year",
          "text": "Year"
        },
        {
          "key": "Custom_Week",
          "text": "Custom Week"
        },
        {
          "key": "Custom_Duration",
          "text": "Custom Duration"
        }
      ],
      "tooltip": "Range View Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Week",
    "visible": true
  },
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Behavior",
      "desc": "Editable",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Editable",
      "ztlFunction": "-get",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": false
  },
  "onChange": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Change",
      "noAps": true,
      "noZtl": true,
      "tooltip": "On Change"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Date Range Scroller",
  "icon": "DateRangeScroller.png",
  "title": "Date Range Scroller 2.0",
  "topics": [
    {
      "content": "Date Range Scroller",
      "title": "Date Range Scroller"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};