import client from '../db.js'

export const createUser = async (userData) => {
    const { name, classname, year } = userData;
    const result = await client.query(
        'INSERT INTO table1 (name, classname, year) VALUES ($1, $2, $3) RETURNING *',
        [name, classname, year]
    );
    return result.rows[0];
};

export const getAllUsers = async () => {
    const result = await client.query('SELECT * FROM table1');
    return result.rows;
};

export const getUserById = async (id) => {
    const result = await client.query('SELECT * FROM table1 WHERE id = $1', [id]);
    return result.rows[0];
};

export const updateUserById = async (id, userData) => {
    const { name, classname, year } = userData;
    const result = await client.query(
        'UPDATE table1 SET name = $1, classname = $2, year = $3 WHERE id = $4 RETURNING *',
        [name, classname, year, id]
    );
    return result.rows[0];
};

export const deleteUserById = async (id) => {
    const result = await client.query('DELETE FROM table1 WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};
