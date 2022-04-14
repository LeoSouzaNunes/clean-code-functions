async function approvePayment(paymentId) {
    await confirmPayment(paymentId);

    const { orderId } = await paymentsRepository.find(paymentId);

    await finishOrder(orderId);
    await sendEmail(orderId);
}

async function confirmPayment(paymentId) {
    const paymentData = { approvedAt: Date.now() };
    await paymentsRepository.update(paymentId, paymentData);
}

async function finishOrder(orderId) {
    const orderData = { status: "approved" };
    await ordersRepository.update(orderId, orderData);
}

async function sendEmail(orderId) {
    const order = await ordersRepository.find(orderId);
    const user = await usersRepository.find(order.userId);
    await emailSender.sendApprovedOrderEmail(user, order);
}
