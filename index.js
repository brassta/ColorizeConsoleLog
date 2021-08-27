export function ConsoleOrange(message, value1 = null, value2 = null, value3 = null) {
  return [
    `%c••• ${message}:%c`,
    'background:#ff6600; color: white; font-weight:bold; padding:2px 10px 2px 4px;',
    'background:transparent; color:transparent; width:0; overflow:hidden',
    value1 ? value1 : '', value2 ? value2 : '', value3 ? value3 : ''
  ];
}

export function ConsoleOrangeDS(message, value1 = null, value2 = null, value3 = null) {
  return [
    `%c••• ${message}:%c`,
    'background:#ff6600; color: #888; font-weight:bold; padding:2px 10px 2px 4px;',
    'background:transparent; color:transparent; width:0; overflow:hidden',
    value1 ? value1 : '', value2 ? value2 : '', value3 ? value3 : ''
  ];
}

export function ConsoleOrangeJS(message, value) {
  return [
    `%c••• ${message}:%c`,
    'background:#ff6600; color: white; font-weight:bold; padding:2px 10px 2px 4px;',
    'background:transparent; color:transparent; width:0; overflow:hidden',
    JSON.stringify(value)
  ];
}

export function ConsoleGray(message, value1 = null, value2 = null, value3 = null) {
  return [
    `%c••• ${message}:%c`,
    'background: #888; color: white; font-weight:bold; padding:2px 15px 2px 4px; border-left:15px solid #00FF33;',
    'background:transparent; color:transparent; width:0; overflow:hidden',
    value1 ? value1 : '', value2 ? value2 : '', value3 ? value3 : ''
  ];
}

export function ConsoleGrayJS(message, value) {
  return [
    `%c••• ${message}:%c`,
    'background: #888; color: white; font-weight:bold; padding:2px 15px 2px 4px; border-left:15px solid #00FF33;',
    'background:transparent; color:transparent; width:0; overflow:hidden',
    JSON.stringify(value)
  ];
}
