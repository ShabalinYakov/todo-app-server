"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UserDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "login", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "password", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=users.dto.js.map