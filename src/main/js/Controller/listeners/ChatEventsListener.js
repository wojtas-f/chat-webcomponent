export default class ChatEventListener {
	constructor(controller) {
		this.shadowRoot = controller.shadowRoot
		this.shadowRoot
			.querySelector('#form')
			.addEventListener('submit', (e) => {
				e.preventDefault()
				const content = e.target['user_input'].value
				controller.newMessage({
					author: 'Vulpie',
					content,
					createdAt: Date.now(),
				})
				e.target['user_input'].value = ''
				e.target['user_input'].focus
			})
	}
}
