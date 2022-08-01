from email import message
from tkinter.messagebox import NO


def main():
    class ChatRoom:
        def display_message(self, user, message: str) -> None:
            print(f"[{user} says]: {message}")

    class User:
        def __init__(self, name: str) -> None:
            self.name = name
            self.chat_room = ChatRoom()

        def say(self, message: str) -> None:
            self.chat_room.display_message(self, message)

        def __str__(self) -> str:
            return self.name

    petr = User("Petr")
    petr.say("Hello!")
    print(petr)


if __name__ == "__main__":
    main()
