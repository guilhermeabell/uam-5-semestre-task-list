	// Utilizando querySelector para pegar todo o formulário, os inputs e a lista de elementos com as tarefas

	window.addEventListener('load', () => {
		const form = document.querySelector("#new-task-form");
		const input = document.querySelector("#new-task-input");
		const list_element = document.querySelector("#tasks");

	// Adicionando um listener (escutador) aos elementos do formulário	

	// O método JavaScript addEventListener () permite configurar funções a serem chamadas quando um evento especificado acontece, como quando um usuário clica em um botão.

	form.addEventListener('submit', (e) => {
		e.preventDefault(); // Previne o comportamento padrão do formulário

		const task = input.value;

		// Aqui é criado a Div com as tarefas
		const task_element = document.createElement('div');
		// Aqui é adicionado o valor do input dentro da div com as tarefas
		task_element.classList.add('task');
		// content é a classe que é passada ao conteudo do valor da tarefa
		const task_content_element = document.createElement('div');
		task_content_element.classList.add('content');

		console.log(task_content_element) // possivel ver dentro desse log

		// aqui o content vira um filho da Div Task
		task_element.appendChild(task_content_element);

		// Aqui está sendo setado alguns atributos para classe content
		const task_input_element = document.createElement('input');
		task_input_element.classList.add('text');
		task_input_element.type = 'text';
		task_input_element.value = task;
		task_input_element.setAttribute('readonly', 'readonly');

		task_content_element.appendChild(task_input_element);

		// adicionando classe de ações para o botão de editar e deletar
		const task_actions_element = document.createElement('div');
		task_actions_element.classList.add('actions');
		
		// botão de editar tarefas
		const task_edit_element = document.createElement('button');
		task_edit_element.classList.add('edit');
		task_edit_element.innerText = 'Edit';

			// Botão de deletar tarefas
		const task_delete_element = document.createElement('button');
		task_delete_element.classList.add('delete');
		task_delete_element.innerText = 'Delete';

		task_actions_element.appendChild(task_edit_element);
		task_actions_element.appendChild(task_delete_element);

		task_element.appendChild(task_actions_element);

		list_element.appendChild(task_element);
// Apos acionar o botão de deletar o valor do input é passado como vazio
		input.value = '';
		
		task_edit_element.addEventListener('click', (e) => {
			if (task_edit_element.innerText.toLowerCase() === "edit") {
				task_edit_element.innerText = "Save";
				task_input_element.removeAttribute("readonly");
				task_input_element.focus();
			} else {
				task_edit_element.innerText = "Edit";
				task_input_element.setAttribute("readonly", "readonly");
			}
		});

		task_delete_element.addEventListener('click', (e) => {
			list_element.removeChild(task_element);
		});
	});
});