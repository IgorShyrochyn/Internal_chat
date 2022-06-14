export const generateChatId = (uid1, uid2) => [uid1, uid2].sort().join('_');
