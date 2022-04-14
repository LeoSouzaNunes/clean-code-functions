# Práticas clean code. 🧼

Alguns exercícios para colocar em prática alguns fundamentos de Clean Code relacionados a funções.

### DRY

Don't Repeat Yourself.

-   Exercício 1

```
async function updateUser(userId, data) {
	const user = await userRepository.find(userId);
	if(!user) throw 'User not found';

  await userRepository.update(userId, data);
}

async function deleteUser(userId) {
	const user = await userRepository.find(userId);
	if(!user) throw 'User not found';

  await userRepository.delete(userId);
}
```

-   Exercício 2

```
async function createUser(userData) {
	const { name, cpf } = userData;

	if(name.length === 0 || cpf.length !== 14) {
		return false;
	}

	await userRepository.create(userData);
}

async function updateUser(userId, userData) {
	const { name, cpf } = userData;

	if(name.length === 0 || cpf.length !== 14) {
		return false;
	}

	await userRepository.update(userId, userData);
}
```

### Extração de Função

Funções com mais de uma responsabilidade.

-   Exercício 1

```
import emailSender from '../utils/emails';

function approvePayment(paymentId) {
  const paymentData = { approvedAt: Date.now() }
  await paymentsRepository.update(paymentId, paymentData);

  const payment = await paymentsRepository.find(paymentId);
  const orderData = { status: 'approved' };
  await ordersRepository.update(payment.orderId, orderData);

  const order = await ordersRepository.find(payment.orderId);
  const user =  await usersRepository.find(order.userId);
  await emailSender.sendApprovedOrderEmail(user, order);
}
```

-   Exercício 2

```
function renderActiveTodos(todos) {
  const ulElement = document.querySelector("ul");

  todos.forEach(todo => {
    if(todo.active || todo.daysFinished < 0) {
      const liElement = document.createElement("li");
      liElement.innerHTML = todo.text;
      ulElement.appendChild(liElement);
    }
  });
}
```
