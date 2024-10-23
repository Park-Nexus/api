
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.0
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.19.0",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accountId: 'accountId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  avatarUrl: 'avatarUrl',
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accountId: 'accountId'
};

exports.Prisma.UserNotificationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  message: 'message',
  read: 'read',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.VehicleScalarFieldEnum = {
  id: 'id',
  type: 'type',
  plate: 'plate',
  brand: 'brand',
  model: 'model',
  color: 'color',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerId: 'ownerId'
};

exports.Prisma.ParkingLotScalarFieldEnum = {
  id: 'id',
  name: 'name',
  latitude: 'latitude',
  longitude: 'longitude',
  mediaUrls: 'mediaUrls',
  status: 'status',
  isApproved: 'isApproved',
  approvedAt: 'approvedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerId: 'ownerId'
};

exports.Prisma.ParkingLotPriceScalarFieldEnum = {
  vehicleType: 'vehicleType',
  price: 'price',
  parkingLotId: 'parkingLotId'
};

exports.Prisma.ParkingLotReviewScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  comment: 'comment',
  mediaUrls: 'mediaUrls',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parkingLotId: 'parkingLotId',
  userId: 'userId'
};

exports.Prisma.ParkingLotServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  mediaUrls: 'mediaUrls',
  price: 'price',
  vehicleTypes: 'vehicleTypes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parkingLotId: 'parkingLotId'
};

exports.Prisma.ParkingSpotScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isAvailable: 'isAvailable',
  vehicleType: 'vehicleType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parkingLotId: 'parkingLotId'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  checkInAt: 'checkInAt',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parkingSpotId: 'parkingSpotId',
  vehicleId: 'vehicleId'
};

exports.Prisma.ParkingRecordScalarFieldEnum = {
  id: 'id',
  checkInAt: 'checkInAt',
  checkOutAt: 'checkOutAt',
  totalPrice: 'totalPrice',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  vehicleId: 'vehicleId',
  parkingSpotId: 'parkingSpotId',
  reservationId: 'reservationId'
};

exports.Prisma.PaymentRecordScalarFieldEnum = {
  id: 'id',
  method: 'method',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  parkingRecordId: 'parkingRecordId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ACCOUNT__ROLE_ALIAS = exports.$Enums.ACCOUNT__ROLE_ALIAS = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.USER__GENDER_ALIAS = exports.$Enums.USER__GENDER_ALIAS = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

exports.VEHICLE__TYPE_ALIAS = exports.$Enums.VEHICLE__TYPE_ALIAS = {
  MOTORCYCLE: 'MOTORCYCLE',
  CAR: 'CAR',
  TRUCK: 'TRUCK'
};

exports.PARKING_LOT__STATUS_ALIAS = exports.$Enums.PARKING_LOT__STATUS_ALIAS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

exports.PARKING_LOT_SERVICE__TYPE_ALIAS = exports.$Enums.PARKING_LOT_SERVICE__TYPE_ALIAS = {
  CAR_WASH: 'CAR_WASH',
  CAR_REPAIR: 'CAR_REPAIR',
  TIRE_REPAIR: 'TIRE_REPAIR',
  OIL_CHANGE: 'OIL_CHANGE',
  CHARGING: 'CHARGING'
};

exports.RESERVATION__STATUS_ALIAS = exports.$Enums.RESERVATION__STATUS_ALIAS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

exports.PARKING_RECORD__STATUS_ALIAS = exports.$Enums.PARKING_RECORD__STATUS_ALIAS = {
  ON_GOING: 'ON_GOING',
  COMPLETED: 'COMPLETED'
};

exports.PAYMENT_RECORD__METHOD_ALIAS = exports.$Enums.PAYMENT_RECORD__METHOD_ALIAS = {
  CASH: 'CASH'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  AccountToken: 'AccountToken',
  User: 'User',
  UserNotification: 'UserNotification',
  Vehicle: 'Vehicle',
  ParkingLot: 'ParkingLot',
  ParkingLotPrice: 'ParkingLotPrice',
  ParkingLotReview: 'ParkingLotReview',
  ParkingLotService: 'ParkingLotService',
  ParkingSpot: 'ParkingSpot',
  Reservation: 'Reservation',
  ParkingRecord: 'ParkingRecord',
  PaymentRecord: 'PaymentRecord'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
