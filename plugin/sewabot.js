let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `  𝙷𝙰𝙸 𝙺𝙰𝙺 𝙸𝙽𝙸 𝙳𝙸𝙰 𝙻𝙸𝚂𝚃 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 & 𝙿𝙴𝚁𝙼𝙸𝚄𝙼
        
1. 𝙶𝚁𝚄𝙿 / 30 𝙷𝙰𝚁𝙸
𝚁𝚙. 15.000 𝙳𝙰𝙽𝙰
𝚁𝚙. 15.000 𝙿𝚄𝙻𝚂𝙰

2. 𝙿𝙴𝚁𝙼𝙸𝚄𝙼 / 30 𝙷𝙰𝚁𝙸
Rp. 10.000 𝙳𝙰𝙽𝙰
Rp. 10.000 𝙿𝚄𝙻𝚂𝙰

3. 𝙿𝙴𝚁𝙼𝙸𝚄𝙼 𝙰𝙽𝙳 𝙶𝚁𝚄𝙿 / 30 𝙷𝙰𝚁𝙸
Rp. 20.000 𝙳𝙰𝙽𝙰
Rp. 20.000 𝙿𝚄𝙻𝚂𝙰

wa.me/${owner[0]}
*𝙽𝙾𝚃𝙴: 𝙸𝚃𝚄 𝙱𝚄𝙺𝙰𝙽 𝙱𝙾𝚃!*
*Owner ${conn.user.name}*
`,
  buttonText: '𝙷𝙰𝚁𝙶𝙰 𝚃𝙸𝙳𝙰𝙺 𝚂𝙴𝚂𝚄𝙰𝙸? 𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText: 'https://github.com/ImleviOfc',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
