client.on('chat-update',async(chat) => {
try {
if (!msg.isOwner) return;
if (!chat.hasNewMessage) return;
if (!Object.keys(chat.messages.array[0]).includes('message') || !Object.keys(chat.messages.array[0]).includes('key')) return;
const msg = await f.metadataMsg(client, chat.messages.array[0]);
if (msg.key.id.length < 20 || msg.key.remoteJid == 'status@broadcast') return;
cmd.execute(msg)
cmd.handlerB(msg)	
} catch(e) {
if (!String(e).includes('this.isZero')){
console.log(e);
client.sendMessage(bot.ownerNumber[0]+'@s.whatsapp.net',f.util.format(data),'conversation');
client.reply(msg,bot.response.Error);
}
}
});