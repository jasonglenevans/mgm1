Blockly.defineBlocksWithJsonArray([
//sprites
{
  "type": "gvbvdxx_game_sprites_show",
  "message0": "show %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_hide",
  "message0": "hide %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_empty",
  "message0": "Create empty sprite",
  "inputsInline": false,
  "output": "Sprite",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_set_img",
  "message0": "Set image on sprite  %1 %2 to %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "image",
      "check": "Image",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_set_position",
  "message0": "Set %1 position on sprite %2 %3 to %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "X",
          "x"
        ],
        [
          "Y",
          "y"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_size",
  "message0": "Set %1 on sprite %2 %3 to %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Width",
          "width"
        ],
        [
          "Height",
          "height"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_ontick",
  "message0": "On game tick %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "event"
    }
  ],
  "inputsInline": false,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_flip",
  "message0": "Flip Sprite %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Horizontal",
          "hor"
        ],
        [
          "Vertical",
          "ver"
        ],
        [
          "None",
          "none"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprites_direction",
  "message0": "Set direction on sprite %1 %2 to %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite",
      "variable": "sprite"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_keydown",
  "message0": "Is key  %1 Pressed?",
  "args0": [
    {
      "type": "input_value",
      "name": "key",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_coliding",
  "message0": "Is sprite %1 colliding with %2 ?",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite1",
      "variable": "sprite"
    },
    {
      "type": "field_variable",
      "name": "sprite2",
      "variable": "sprite2"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_sprite_get",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "sprite1",
      "variable": "sprite"
    },
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "x position",
          "x"
        ],
        [
          "y position",
          "y"
        ],
        [
          "direction",
          "direction"
        ],
        [
          "width",
          "width"
        ],
        [
          "height",
          "height"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
//sensing
{
  "type": "gvbvdxx_game_mouse_x",
  "message0": "Mouse X Position",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_mouse_y",
  "message0": "Mouse Y Position",
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_game_mouse_down",
  "message0": "Mouse Down?",
  "output": "Boolean",
  "colour": BlockColors["game"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_game_sprites_empty'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.makeSprite()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_set_img'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.image = '+value_image+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_set_position'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.'+dropdown_name+' = '+value_pos+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_size'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.'+dropdown_name+' = '+value_pos+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_ontick'] = function(block) {
  var statements_event = Blockly.JavaScript.statementToCode(block, 'event');
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.events.tick.push(function () { '+statements_event+'});\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_flip'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.flip = "'+dropdown_name+'";\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_direction'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite+'.direction = '+value_name+';\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_mouse_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_mouse_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_mouse_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.mouseDown';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_keydown'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.getKeyPressed('+value_key+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_coliding'] = function(block) {
  var variable_sprite1 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite1'), Blockly.Variables.NAME_TYPE);
  var variable_sprite2 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.isTouching('+variable_sprite1+','+variable_sprite2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprite_get'] = function(block) {
  var variable_sprite1 = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite1'), Blockly.Variables.NAME_TYPE);
  var dropdown_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sprite1+'.'+dropdown_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_game_sprites_hide'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.hideSprite('+variable_sprite+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_game_sprites_show'] = function(block) {
  var variable_sprite = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sprite'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.showSprite('+variable_sprite+');\n';
  return code;
};