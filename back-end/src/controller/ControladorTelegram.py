import logging
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler

class ControladorTelegram(object):
    """ControladorTelegram
    Estrutura dados a partir do chat do Telegram
    """
    def __init__(self):
        super(ControladorTelegram, self).__init__()
    
        logging.basicConfig(
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            level=logging.INFO
        )

    async def start(self, update: Update, context: ContextTypes.DEFAULT_TYPE):
        await context.bot.send_message(chat_id=update.effective_chat.id, text="I'm a bot, please talk to me!")

    def run(self):
        # Como o Telegram está bloqueado no BR não
        # consegui uma api_key para implementar
        application = ApplicationBuilder().token('TOKEN').build()
        
        start_handler = CommandHandler('start', self.start)
        application.add_handler(start_handler)
        
        application.run_polling()
    

if __name__ == "__main__":
    c = ControladorTelegram()
    c.run()