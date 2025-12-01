const fs = require('fs');

const logos = [
    { name: 'dataleap', text: 'DL', color: '#00CA72' },
    { name: 'bytecloud', text: 'BC', color: '#336699' },
    { name: 'langgraph', text: 'LG', color: '#FF6B6B' },
    { name: 'langchain', text: 'LC', color: '#1C2C5B' },
    { name: 'llamaindex', text: 'LI', color: '#9B59B6' },
    { name: 'openwebui', text: 'OU', color: '#E67E22' },
];

const generateSVG = (text, color) => `
<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="64" fill="${color}"/>
  <text x="64" y="80" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">${text}</text>
</svg>
`;

logos.forEach(logo => {
    fs.writeFileSync(`${logo.name}.svg`, generateSVG(logo.text, logo.color));
    console.log(`Generated ${logo.name}.svg`);
});
