async function updateUser(userId, data) {
    await findUserById(userId);
    await userRepository.update(userId, data);
}

async function deleteUser(userId) {
    await findUserById(userId);
    await userRepository.delete(userId);
}

async function findUserById(id) {
    const user = await userRepository.find(id);
    if (!user) throw "User not found";
}
