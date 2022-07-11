let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Edo Romadon
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 05 January
*🧩 Hobby* : Nonton Anime - Drakor - Doraemon, Deface, Editting Script, Main Game
*💬 Sifat* : Ramah dan Baik
*🗺️ Tinggal* : Semarang, Jawa Tengah
*❤️ Suka* : Warna Hitam & Biru, Nasi Goreng, Es Teh


*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @edoromadon
*🇫  Facebook* : Edo Romadon
*📠 Twitter* : @e_romadon
*🏮 Chanel Youtube* : Edo Romadon
*🐈 Github* : edoromadon
*📬 Email* : edoromadon@yahoo.co.id
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler