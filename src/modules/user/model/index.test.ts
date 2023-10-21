import UserRepository, { IUserRepository } from ".";
import { IResult } from "../../base/model";
import DummyDB from "../../../services/database/dummy";

describe('UserRepository', () => {
    let userRepository = new UserRepository(new DummyDB());

    describe('create', () => {
        it('should create a new user', async () => {
            // Define the user data you want to create
            const userData: IUserRepository = {
                first_name: 'James',
                last_name: 'William',
                email: 'test@example.com',
                id: "1",
                password: "password"
            };

            // Define the expected result
            const expectedResult: IResult<IUserRepository> = {
                successful: true,
                message: 'Successfully',
                details: userData
            };

            const result = await userRepository.create(userData);
            expect(result.details).toEqual(expectedResult.details);
        });
    });

    // Add more test cases for other UserRepository methods as needed
});
