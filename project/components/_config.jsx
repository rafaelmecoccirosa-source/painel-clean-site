// Shared config — must load before any component
const { useState, useEffect, useRef } = React;

const WHATSAPP = "5547996785953";
const waLink = (msg = "Olá! Gostaria de mais informações sobre os equipamentos Painel Clean.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
