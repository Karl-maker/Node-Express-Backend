import IDatabase from "../../database/model";

/**
 * A base model for interacting with a database.
 *
 * @typeParam T - The type of data that the model deals with.
 */
export default class BaseModel<T> {
    db: IDatabase<any>; // The database interface used by the model.

    /**
     * Creates a new BaseModel instance.
     *
     * @param db - The database interface to use for data operations.
     */
    constructor(db: IDatabase<any>) {
        this.db = db;
    }

    /**
     * Create a new record in the database.
     *
     * @param data - The data to be inserted into the database.
     * @returns A promise that resolves to an IResult indicating the success or failure of the operation.
     */
    async create(data: T): Promise<IResult<T>> {
        return await this.db.create(data);
    }

    /**
     * Delete a record from the database by its ID.
     *
     * @param id - The ID of the record to delete.
     * @returns A promise that resolves to an IResult indicating the success or failure of the operation.
     */
    async deleteById(id: string): Promise<IResult<T>> {
        return await this.db.deleteById(id);
    }

    /**
     * Delete multiple records from the database based on a given condition.
     *
     * @param where - A condition for selecting records to delete.
     * @returns A promise that resolves to an IResult indicating the success or failure of the operation.
     */
    async deleteMany(where: Partial<T>): Promise<IResult<T>> {
        return await this.db.deleteMany(where);
    }

    /**
     * Update a record in the database by its ID.
     *
     * @param id - The ID of the record to update.
     * @param where - The data to update in the record.
     * @returns A promise that resolves to an IResult indicating the success or failure of the operation.
     */
    async updateById(id: string, where: Partial<T>): Promise<IResult<T>> {
        return await this.db.updateById(id, where);
    }

    /**
     * Update multiple records in the database based on a given condition.
     *
     * @param where - A condition for selecting records to update.
     * @param data - The data to update in the selected records.
     * @returns A promise that resolves to an IResult indicating the success or failure of the operation.
     */
    async updateMany(where: Partial<T>, data: Partial<T>): Promise<IResult<T>> {
        return await this.db.updateMany(where, data);
    }

    /**
     * Find a record in the database by its ID.
     *
     * @param id - The ID of the record to find.
     * @returns A promise that resolves to an IResult with details of the found record.
     */
    async findById(id: string): Promise<IResult<T>> {
        return await this.db.findById(id);
    }

    /**
     * Find multiple records in the database based on a given condition.
     *
     * @param where - A condition for selecting records to find.
     * @returns A promise that resolves to an IResult with details of the found records.
     */
    async findMany(where: Partial<T>): Promise<IResult<T>> {
        return await this.db.findMany(where);
    }
}

/**
 * Interface representing the result of an operation.
 */
export interface IResult<T> {
    successful: boolean;   // Indicates whether the operation was successful.
    message: string;       // A message describing the result of the operation.
    details?: Partial<T>;  // Optional details related to the operation.
}
