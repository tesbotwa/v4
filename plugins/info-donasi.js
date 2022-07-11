import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Support edོbot Agar edོbot Terus Jalan 😉
*PAYMENT ↓*
_*Pulsa ( Axis )* : 083823701518
_*Dana / Ovo* : 083823701518
Setelah Melakukan Donasi Kirim Bukti Pembayaran ke Owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://instagram.com/edoromadon/', 'Instagram', null, null, [
['Owner', '/owner']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
