import axios from 'axios';

const TOKEN = process.env.REACT_APP_SECRET_NAME;

const url = `https://api.telegram.org/bot${TOKEN}/`;

const chat_id = '-1001949051286';

export async function Telegram_send_msg(msg) {
  const method = 'sendMessage';
  const url_method = url + method;
  const data = { chat_id: chat_id, text: msg };
  console.log('Send to telegram');
  const response = await axios.post(url_method, data);
}
