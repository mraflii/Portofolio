const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Icons with git:', keys.filter(k => k.toLowerCase().includes('git')));
console.log('Icons with twit:', keys.filter(k => k.toLowerCase().includes('twit')));
console.log('Icons with link:', keys.filter(k => k.toLowerCase().includes('link')));
