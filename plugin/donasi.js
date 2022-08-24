let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [+62 851-7244-6692]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
