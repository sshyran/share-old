/**
 * Copyright (C) 2005-2015 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This contains the constants that are used by Custom Model Management
 * 
 * @module cmm/CMMConstants
 * @author Richard Smith
 * @author Kevin Roast
 */
define({

   // Model constants
   MODELS_LIST_SCOPE: "MODELS_LIST_",
   MODEL_LIST_RELOAD: "CMM_RELOAD_MODELS",
   GET_MODELS_TOPIC: "CMM_GET_MODELS",
   CREATE_MODEL: "CMM_CREATE_MODEL",
   EDIT_MODEL: "CMM_EDIT_MODEL",
   ACTIVATE_MODEL: "CMM_ACTIVATE_MODEL",
   DEACTIVATE_MODEL: "CMM_DEACTIVATE_MODEL",
   DELETE_MODEL: "CMM_DELETE_MODEL",
   EXPORT_MODEL: "CMM_EXPORT_MODEL",
   IMPORT_MODEL: "CMM_IMPORT_MODEL",
   
   // Type constants
   TYPES_LIST_SCOPE: "TYPES_LIST_",
   TYPE_LIST_RELOAD: "CMM_RELOAD_TYPES",
   GET_TYPES_TOPIC: "CMM_GET_TYPES",
   GET_PARENT_TYPES: "CMM_GET_PARENT_TYPES",
   CREATE_CUSTOMTYPE: "CMM_CREATE_CUSTOMTYPE",
   EDIT_CUSTOMTYPE: "CMM_EDIT_CUSTOMTYPE",
   DELETE_TYPE: "CMM_DELETE_TYPE",
   FIND_TYPES: "CMM_FIND_TYPES",

   // Property group constants
   PROPERTYGROUPS_LIST_SCOPE: "PROPERTYGROUPS_LIST_",
   PROPERTYGROUP_LIST_RELOAD: "CMM_RELOAD_PROPERTYGROUPS",
   GET_PROPERTYGROUPS_TOPIC: "CMM_GET_PROPERTYGROUPS",
   GET_PARENT_PROPERTYGROUPS: "CMM_GET_PARENT_PROPERTYGROUPS",
   CREATE_PROPERTYGROUP: "CMM_CREATE_PROPERTYGROUP",
   EDIT_PROPERTYGROUP: "CMM_EDIT_PROPERTYGROUP",
   DELETE_PROPERTYGROUP: "CMM_DELETE_PROPERTYGROUP",
   FIND_PROPERTYGROUPS: "CMM_FIND_PROPERTYGROUPS",

   // Property constants
   PROPERTIES_LIST_SCOPE: "PROPERTIES_LIST_",
   PROPERTIES_LIST_RELOAD: "CMM_RELOAD_PROPERTIES",
   GET_PROPERTIES_TOPIC: "CMM_GET_PROPERTIES",
   GET_EDITOR_PROPERTIES_TOPIC: "CMM_GET_EDITOR_PROPERTIES",
   CREATE_PROPERTY: "CMM_CREATE_PROPERTY",
   EDIT_PROPERTY: "CMM_EDIT_PROPERTY",
   DELETE_PROPERTY: "CMM_DELETE_PROPERTY",
   
   // Form editor constants
   FORM_EDITOR_SCOPE: "FORM_EDITOR_",
   FORM_EDITOR_PROPERTIES_RELOAD: "CMM_RELOAD_FORM_EDITOR_PROPERTIES",
   FORM_EDITOR_SAVE_TOPIC: "CMM_FORM_EDITOR_SAVE",
   FORM_EDITOR_DEFAULT_LAYOUT_ACTION: "CMM_EDITOR_DEFAULT_LAYOUT_ACTION",
   FORM_EDITOR_CLEAR: "CMM_EDITOR_CLEAR",
   FORM_EDITOR_CLEAR_TO_PALETTE: "CMM_EDITOR_CLEAR_TO_PALETTE",
   FORM_EDITOR_CLEAR_TO_PALETTE_ACTION: "CMM_EDITOR_CLEAR_TO_PALETTE_ACTION",
   FORM_EDITOR_GET_VALUE: "FORM_EDITOR_GET_VALUE",
   FORM_EDITOR_ITEM_SELECTED: "FORM_EDITOR_ITEM_SELECTED",
   FORM_EDITOR_ITEM_FOCUSED: "FORM_EDITOR_ITEM_FOCUSED",
   FORM_EDITOR_CANVAS_VALUE_CHANGED: "_valueChangeOf_FORM_CANVAS",   // generated from FORM_CANVAS Form item value changed

   // Pane control constants
   PANE_SELECTION_TOPIC: "CMM_PANE_SELECT",
   DISPLAY_MODELS_TOPIC: "CMM_DSP_MODELS",
   DISPLAY_TYPES_AND_PROPERTYGROUPS_TOPIC: "CMM_DSP_TYPES_AND_PROPERTYGROUPS",
   DISPLAY_PROPERTIES_TOPIC: "CMM_DSP_PROPERTIES",
   DISPLAY_FORM_EDITOR_TOPIC: "CMM_DSP_FORM_EDITOR",
   PANE_TITLE_MODELS: "models",
   PANE_TITLE_TYPE_AND_PROPERTYGROUPS: "types_property_groups",
   PANE_TITLE_PROPERTIES: "properties",
   PANE_TITLE_FORM_EDITOR: "editor",
   PANE_SELECTION_HASH_VAR: "view",
   MODEL_SELECTION_HASH_VAR: "model",
   TYPE_SELECTION_HASH_VAR: "type",
   PROPERTYGROUP_SELECTION_HASH_VAR: "propertygroup",

   // Miscellaneous constants
   SET_LIST_MODEL_TOPIC: "CMM_SET_MODEL",
   NOTIFICATION_TOPIC: "ALF_DISPLAY_NOTIFICATION",
   UPDATE_MODEL_HEADING: "CMM_UPDATE_MODEL_HEADING",
   UPDATE_MODEL_HEADING_STATUS: "CMM_UPDATE_MODEL_HEADING_STATUS",
   UPDATE_TPG_HEADING: "CMM_UPDATE_TPG_HEADING",
   UPDATE_TPG_HEADING_STATUS: "CMM_UPDATE_TPG_HEADING_STATUS"

});