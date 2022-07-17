import sqlalchemy
import dbsecrets

def make_engine(db):    
    engine = sqlalchemy.create_engine(f"postgresql+psycopg2://{dbsecrets.uid}:{dbsecrets.pwd}@{dbsecrets.address}/{db}").execution_options(autocommit=True)
    return engine

def execute_SQL(engine, sql, params):
    with engine.connect().execution_options(autocommit=True) as conn:
        conn.execute(sqlalchemy.sql.text(sql), params)
        # conn.commit()


submitNewQuestion = """
SELECT * FROM public.submitnewquestion(%(question)s)
"""