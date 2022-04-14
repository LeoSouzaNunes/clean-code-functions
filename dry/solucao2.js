async function createUser(userData) {
    if (!isValidUserData(userData)) return false;
    await userRepository.create(userData);
}

async function updateUser(userId, userData) {
    if (!isValidUserData(userData)) return false;
    await userRepository.update(userId, userData);
}

function isValidUserData({ name, cpf }) {
    if (name.length === 0 || cpf.length !== 14) {
        return false;
    }
}
