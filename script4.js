// 채팅 입력란과 메시지를 표시할 영역의 DOM 요소 가져오기
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');


// 채팅 입력란에서 Enter 키를 누르면 sendMessage 함수 호출
chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// 채팅 메시지를 생성하고 표시하는 함수
function sendMessage() {
    const message = chatInput.value.trim(); // 입력된 메시지 가져오기
    if (message !== ' ') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement); // 새 메시지를 채팅 영역에 추가
        chatInput.value = '나 :  '; // 입력란 비우기
        chatMessages.scrollTop = chatMessages.scrollHeight; // 스크롤 아래로 이동
    }
}