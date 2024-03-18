from .utils.db_util import MongoDBUtil
import uuid
from .utils.utils import get_current_time


#For storing data

class SageDAo:
    collection = MongoDBUtil.get_collection(collection="card_sage")


class CardDAO:
    collection = MongoDBUtil.get_collection()

    @staticmethod
    def new_card_creation(user_id, goal, goalDimensions):
        data = {
            "_id": str(uuid.uuid4()),
            "user_id": user_id,
            "goal": goal,
            "goalDimensions":goalDimensions,
        }
        card_creation_id = CardDAO.collection.insert_one(data).inserted_id
        return card_creation_id
      