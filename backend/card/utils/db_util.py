from .db_connection import MongoConnection


class MongoDBUtil:

    @staticmethod
    def get_client():
        return MongoConnection()

    # set db name
    @staticmethod
    def get_db(db_name="card_db"):
        return MongoConnection().client[db_name]   

    # get collection, default:card
    @staticmethod
    def get_collection(db_name="card_db", collection="card"):
        return MongoConnection().client[db_name][collection]