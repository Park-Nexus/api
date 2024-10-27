
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountToken
 * 
 */
export type AccountToken = $Result.DefaultSelection<Prisma.$AccountTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserNotification
 * 
 */
export type UserNotification = $Result.DefaultSelection<Prisma.$UserNotificationPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model ParkingLot
 * 
 */
export type ParkingLot = $Result.DefaultSelection<Prisma.$ParkingLotPayload>
/**
 * Model ParkingLotPrice
 * 
 */
export type ParkingLotPrice = $Result.DefaultSelection<Prisma.$ParkingLotPricePayload>
/**
 * Model ParkingLotReview
 * 
 */
export type ParkingLotReview = $Result.DefaultSelection<Prisma.$ParkingLotReviewPayload>
/**
 * Model ParkingLotService
 * 
 */
export type ParkingLotService = $Result.DefaultSelection<Prisma.$ParkingLotServicePayload>
/**
 * Model ParkingSpot
 * 
 */
export type ParkingSpot = $Result.DefaultSelection<Prisma.$ParkingSpotPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ParkingRecord
 * 
 */
export type ParkingRecord = $Result.DefaultSelection<Prisma.$ParkingRecordPayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ACCOUNT__ROLE_ALIAS: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type ACCOUNT__ROLE_ALIAS = (typeof ACCOUNT__ROLE_ALIAS)[keyof typeof ACCOUNT__ROLE_ALIAS]


export const USER__GENDER_ALIAS: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type USER__GENDER_ALIAS = (typeof USER__GENDER_ALIAS)[keyof typeof USER__GENDER_ALIAS]


export const VEHICLE__TYPE_ALIAS: {
  MOTORCYCLE: 'MOTORCYCLE',
  CAR: 'CAR',
  TRUCK: 'TRUCK'
};

export type VEHICLE__TYPE_ALIAS = (typeof VEHICLE__TYPE_ALIAS)[keyof typeof VEHICLE__TYPE_ALIAS]


export const PARKING_LOT__STATUS_ALIAS: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type PARKING_LOT__STATUS_ALIAS = (typeof PARKING_LOT__STATUS_ALIAS)[keyof typeof PARKING_LOT__STATUS_ALIAS]


export const PARKING_LOT_SERVICE__TYPE_ALIAS: {
  CAR_WASH: 'CAR_WASH',
  CAR_REPAIR: 'CAR_REPAIR',
  TIRE_REPAIR: 'TIRE_REPAIR',
  OIL_CHANGE: 'OIL_CHANGE',
  CHARGING: 'CHARGING'
};

export type PARKING_LOT_SERVICE__TYPE_ALIAS = (typeof PARKING_LOT_SERVICE__TYPE_ALIAS)[keyof typeof PARKING_LOT_SERVICE__TYPE_ALIAS]


export const RESERVATION__STATUS_ALIAS: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

export type RESERVATION__STATUS_ALIAS = (typeof RESERVATION__STATUS_ALIAS)[keyof typeof RESERVATION__STATUS_ALIAS]


export const PARKING_RECORD__STATUS_ALIAS: {
  ON_GOING: 'ON_GOING',
  COMPLETED: 'COMPLETED'
};

export type PARKING_RECORD__STATUS_ALIAS = (typeof PARKING_RECORD__STATUS_ALIAS)[keyof typeof PARKING_RECORD__STATUS_ALIAS]


export const PAYMENT_RECORD__METHOD_ALIAS: {
  CASH: 'CASH'
};

export type PAYMENT_RECORD__METHOD_ALIAS = (typeof PAYMENT_RECORD__METHOD_ALIAS)[keyof typeof PAYMENT_RECORD__METHOD_ALIAS]

}

export type ACCOUNT__ROLE_ALIAS = $Enums.ACCOUNT__ROLE_ALIAS

export const ACCOUNT__ROLE_ALIAS: typeof $Enums.ACCOUNT__ROLE_ALIAS

export type USER__GENDER_ALIAS = $Enums.USER__GENDER_ALIAS

export const USER__GENDER_ALIAS: typeof $Enums.USER__GENDER_ALIAS

export type VEHICLE__TYPE_ALIAS = $Enums.VEHICLE__TYPE_ALIAS

export const VEHICLE__TYPE_ALIAS: typeof $Enums.VEHICLE__TYPE_ALIAS

export type PARKING_LOT__STATUS_ALIAS = $Enums.PARKING_LOT__STATUS_ALIAS

export const PARKING_LOT__STATUS_ALIAS: typeof $Enums.PARKING_LOT__STATUS_ALIAS

export type PARKING_LOT_SERVICE__TYPE_ALIAS = $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS

export const PARKING_LOT_SERVICE__TYPE_ALIAS: typeof $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS

export type RESERVATION__STATUS_ALIAS = $Enums.RESERVATION__STATUS_ALIAS

export const RESERVATION__STATUS_ALIAS: typeof $Enums.RESERVATION__STATUS_ALIAS

export type PARKING_RECORD__STATUS_ALIAS = $Enums.PARKING_RECORD__STATUS_ALIAS

export const PARKING_RECORD__STATUS_ALIAS: typeof $Enums.PARKING_RECORD__STATUS_ALIAS

export type PAYMENT_RECORD__METHOD_ALIAS = $Enums.PAYMENT_RECORD__METHOD_ALIAS

export const PAYMENT_RECORD__METHOD_ALIAS: typeof $Enums.PAYMENT_RECORD__METHOD_ALIAS

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.accountToken`: Exposes CRUD operations for the **AccountToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTokens
    * const accountTokens = await prisma.accountToken.findMany()
    * ```
    */
  get accountToken(): Prisma.AccountTokenDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userNotification`: Exposes CRUD operations for the **UserNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNotifications
    * const userNotifications = await prisma.userNotification.findMany()
    * ```
    */
  get userNotification(): Prisma.UserNotificationDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.parkingLot`: Exposes CRUD operations for the **ParkingLot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLots
    * const parkingLots = await prisma.parkingLot.findMany()
    * ```
    */
  get parkingLot(): Prisma.ParkingLotDelegate<ExtArgs>;

  /**
   * `prisma.parkingLotPrice`: Exposes CRUD operations for the **ParkingLotPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLotPrices
    * const parkingLotPrices = await prisma.parkingLotPrice.findMany()
    * ```
    */
  get parkingLotPrice(): Prisma.ParkingLotPriceDelegate<ExtArgs>;

  /**
   * `prisma.parkingLotReview`: Exposes CRUD operations for the **ParkingLotReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLotReviews
    * const parkingLotReviews = await prisma.parkingLotReview.findMany()
    * ```
    */
  get parkingLotReview(): Prisma.ParkingLotReviewDelegate<ExtArgs>;

  /**
   * `prisma.parkingLotService`: Exposes CRUD operations for the **ParkingLotService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLotServices
    * const parkingLotServices = await prisma.parkingLotService.findMany()
    * ```
    */
  get parkingLotService(): Prisma.ParkingLotServiceDelegate<ExtArgs>;

  /**
   * `prisma.parkingSpot`: Exposes CRUD operations for the **ParkingSpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSpots
    * const parkingSpots = await prisma.parkingSpot.findMany()
    * ```
    */
  get parkingSpot(): Prisma.ParkingSpotDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.parkingRecord`: Exposes CRUD operations for the **ParkingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingRecords
    * const parkingRecords = await prisma.parkingRecord.findMany()
    * ```
    */
  get parkingRecord(): Prisma.ParkingRecordDelegate<ExtArgs>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "accountToken" | "user" | "userNotification" | "vehicle" | "parkingLot" | "parkingLotPrice" | "parkingLotReview" | "parkingLotService" | "parkingSpot" | "reservation" | "parkingRecord" | "paymentRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountToken: {
        payload: Prisma.$AccountTokenPayload<ExtArgs>
        fields: Prisma.AccountTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          findFirst: {
            args: Prisma.AccountTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          findMany: {
            args: Prisma.AccountTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>[]
          }
          create: {
            args: Prisma.AccountTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          createMany: {
            args: Prisma.AccountTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>[]
          }
          delete: {
            args: Prisma.AccountTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          update: {
            args: Prisma.AccountTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccountTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenPayload>
          }
          aggregate: {
            args: Prisma.AccountTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountToken>
          }
          groupBy: {
            args: Prisma.AccountTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AccountTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserNotification: {
        payload: Prisma.$UserNotificationPayload<ExtArgs>
        fields: Prisma.UserNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          findFirst: {
            args: Prisma.UserNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          findMany: {
            args: Prisma.UserNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>[]
          }
          create: {
            args: Prisma.UserNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          createMany: {
            args: Prisma.UserNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>[]
          }
          delete: {
            args: Prisma.UserNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          update: {
            args: Prisma.UserNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          deleteMany: {
            args: Prisma.UserNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPayload>
          }
          aggregate: {
            args: Prisma.UserNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNotification>
          }
          groupBy: {
            args: Prisma.UserNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<UserNotificationCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      ParkingLot: {
        payload: Prisma.$ParkingLotPayload<ExtArgs>
        fields: Prisma.ParkingLotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findFirst: {
            args: Prisma.ParkingLotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findMany: {
            args: Prisma.ParkingLotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          create: {
            args: Prisma.ParkingLotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          createMany: {
            args: Prisma.ParkingLotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          delete: {
            args: Prisma.ParkingLotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          update: {
            args: Prisma.ParkingLotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingLotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          aggregate: {
            args: Prisma.ParkingLotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLot>
          }
          groupBy: {
            args: Prisma.ParkingLotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotCountAggregateOutputType> | number
          }
        }
      }
      ParkingLotPrice: {
        payload: Prisma.$ParkingLotPricePayload<ExtArgs>
        fields: Prisma.ParkingLotPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          findFirst: {
            args: Prisma.ParkingLotPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          findMany: {
            args: Prisma.ParkingLotPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>[]
          }
          create: {
            args: Prisma.ParkingLotPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          createMany: {
            args: Prisma.ParkingLotPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>[]
          }
          delete: {
            args: Prisma.ParkingLotPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          update: {
            args: Prisma.ParkingLotPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingLotPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPricePayload>
          }
          aggregate: {
            args: Prisma.ParkingLotPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLotPrice>
          }
          groupBy: {
            args: Prisma.ParkingLotPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotPriceCountAggregateOutputType> | number
          }
        }
      }
      ParkingLotReview: {
        payload: Prisma.$ParkingLotReviewPayload<ExtArgs>
        fields: Prisma.ParkingLotReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          findFirst: {
            args: Prisma.ParkingLotReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          findMany: {
            args: Prisma.ParkingLotReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>[]
          }
          create: {
            args: Prisma.ParkingLotReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          createMany: {
            args: Prisma.ParkingLotReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>[]
          }
          delete: {
            args: Prisma.ParkingLotReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          update: {
            args: Prisma.ParkingLotReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingLotReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotReviewPayload>
          }
          aggregate: {
            args: Prisma.ParkingLotReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLotReview>
          }
          groupBy: {
            args: Prisma.ParkingLotReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotReviewCountAggregateOutputType> | number
          }
        }
      }
      ParkingLotService: {
        payload: Prisma.$ParkingLotServicePayload<ExtArgs>
        fields: Prisma.ParkingLotServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          findFirst: {
            args: Prisma.ParkingLotServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          findMany: {
            args: Prisma.ParkingLotServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>[]
          }
          create: {
            args: Prisma.ParkingLotServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          createMany: {
            args: Prisma.ParkingLotServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>[]
          }
          delete: {
            args: Prisma.ParkingLotServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          update: {
            args: Prisma.ParkingLotServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingLotServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotServicePayload>
          }
          aggregate: {
            args: Prisma.ParkingLotServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLotService>
          }
          groupBy: {
            args: Prisma.ParkingLotServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotServiceCountAggregateOutputType> | number
          }
        }
      }
      ParkingSpot: {
        payload: Prisma.$ParkingSpotPayload<ExtArgs>
        fields: Prisma.ParkingSpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findMany: {
            args: Prisma.ParkingSpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          create: {
            args: Prisma.ParkingSpotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          createMany: {
            args: Prisma.ParkingSpotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSpotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          update: {
            args: Prisma.ParkingSpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingSpotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSpot>
          }
          groupBy: {
            args: Prisma.ParkingSpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSpotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpotCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ParkingRecord: {
        payload: Prisma.$ParkingRecordPayload<ExtArgs>
        fields: Prisma.ParkingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findFirst: {
            args: Prisma.ParkingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findMany: {
            args: Prisma.ParkingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          create: {
            args: Prisma.ParkingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          createMany: {
            args: Prisma.ParkingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          delete: {
            args: Prisma.ParkingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          update: {
            args: Prisma.ParkingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          deleteMany: {
            args: Prisma.ParkingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          aggregate: {
            args: Prisma.ParkingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingRecord>
          }
          groupBy: {
            args: Prisma.ParkingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    AccountToken: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AccountToken?: boolean | AccountCountOutputTypeCountAccountTokenArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAccountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTokenWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    parkingLotReviews: number
    parkingLots: number
    paymentRecords: number
    userNotifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    parkingLotReviews?: boolean | UserCountOutputTypeCountParkingLotReviewsArgs
    parkingLots?: boolean | UserCountOutputTypeCountParkingLotsArgs
    paymentRecords?: boolean | UserCountOutputTypeCountPaymentRecordsArgs
    userNotifications?: boolean | UserCountOutputTypeCountUserNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingLotReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNotificationWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    reservations: number
    parkingRecords: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | VehicleCountOutputTypeCountReservationsArgs
    parkingRecords?: boolean | VehicleCountOutputTypeCountParkingRecordsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Count Type ParkingLotCountOutputType
   */

  export type ParkingLotCountOutputType = {
    parkingSpots: number
    parkingLotServices: number
    parkingLotReviews: number
    parkingLotPrices: number
  }

  export type ParkingLotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSpots?: boolean | ParkingLotCountOutputTypeCountParkingSpotsArgs
    parkingLotServices?: boolean | ParkingLotCountOutputTypeCountParkingLotServicesArgs
    parkingLotReviews?: boolean | ParkingLotCountOutputTypeCountParkingLotReviewsArgs
    parkingLotPrices?: boolean | ParkingLotCountOutputTypeCountParkingLotPricesArgs
  }

  // Custom InputTypes
  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotCountOutputType
     */
    select?: ParkingLotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingLotServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotServiceWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingLotReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotReviewWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingLotPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotPriceWhereInput
  }


  /**
   * Count Type ParkingSpotCountOutputType
   */

  export type ParkingSpotCountOutputType = {
    reservations: number
    parkingRecords: number
  }

  export type ParkingSpotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ParkingSpotCountOutputTypeCountReservationsArgs
    parkingRecords?: boolean | ParkingSpotCountOutputTypeCountParkingRecordsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpotCountOutputType
     */
    select?: ParkingSpotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.ACCOUNT__ROLE_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.ACCOUNT__ROLE_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
    AccountToken?: boolean | Account$AccountTokenArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
    AccountToken?: boolean | Account$AccountTokenArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      AccountToken: Prisma.$AccountTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.ACCOUNT__ROLE_ALIAS
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Account$userArgs<ExtArgs> = {}>(args?: Subset<T, Account$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    AccountToken<T extends Account$AccountTokenArgs<ExtArgs> = {}>(args?: Subset<T, Account$AccountTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly role: FieldRef<"Account", 'ACCOUNT__ROLE_ALIAS'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account.AccountToken
   */
  export type Account$AccountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    where?: AccountTokenWhereInput
    orderBy?: AccountTokenOrderByWithRelationInput | AccountTokenOrderByWithRelationInput[]
    cursor?: AccountTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTokenScalarFieldEnum | AccountTokenScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountToken
   */

  export type AggregateAccountToken = {
    _count: AccountTokenCountAggregateOutputType | null
    _avg: AccountTokenAvgAggregateOutputType | null
    _sum: AccountTokenSumAggregateOutputType | null
    _min: AccountTokenMinAggregateOutputType | null
    _max: AccountTokenMaxAggregateOutputType | null
  }

  export type AccountTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountTokenSumAggregateOutputType = {
    id: number | null
  }

  export type AccountTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type AccountTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type AccountTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    updatedAt: number
    accountId: number
    _all: number
  }


  export type AccountTokenAvgAggregateInputType = {
    id?: true
  }

  export type AccountTokenSumAggregateInputType = {
    id?: true
  }

  export type AccountTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type AccountTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type AccountTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    _all?: true
  }

  export type AccountTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountToken to aggregate.
     */
    where?: AccountTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokens to fetch.
     */
    orderBy?: AccountTokenOrderByWithRelationInput | AccountTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTokens
    **/
    _count?: true | AccountTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTokenMaxAggregateInputType
  }

  export type GetAccountTokenAggregateType<T extends AccountTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountToken[P]>
      : GetScalarType<T[P], AggregateAccountToken[P]>
  }




  export type AccountTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTokenWhereInput
    orderBy?: AccountTokenOrderByWithAggregationInput | AccountTokenOrderByWithAggregationInput[]
    by: AccountTokenScalarFieldEnum[] | AccountTokenScalarFieldEnum
    having?: AccountTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTokenCountAggregateInputType | true
    _avg?: AccountTokenAvgAggregateInputType
    _sum?: AccountTokenSumAggregateInputType
    _min?: AccountTokenMinAggregateInputType
    _max?: AccountTokenMaxAggregateInputType
  }

  export type AccountTokenGroupByOutputType = {
    id: number
    token: string
    createdAt: Date
    updatedAt: Date
    accountId: string
    _count: AccountTokenCountAggregateOutputType | null
    _avg: AccountTokenAvgAggregateOutputType | null
    _sum: AccountTokenSumAggregateOutputType | null
    _min: AccountTokenMinAggregateOutputType | null
    _max: AccountTokenMaxAggregateOutputType | null
  }

  type GetAccountTokenGroupByPayload<T extends AccountTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccountTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountToken"]>

  export type AccountTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountToken"]>

  export type AccountTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
  }

  export type AccountTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AccountTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountToken"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      createdAt: Date
      updatedAt: Date
      accountId: string
    }, ExtArgs["result"]["accountToken"]>
    composites: {}
  }

  type AccountTokenGetPayload<S extends boolean | null | undefined | AccountTokenDefaultArgs> = $Result.GetResult<Prisma.$AccountTokenPayload, S>

  type AccountTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountTokenCountAggregateInputType | true
    }

  export interface AccountTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountToken'], meta: { name: 'AccountToken' } }
    /**
     * Find zero or one AccountToken that matches the filter.
     * @param {AccountTokenFindUniqueArgs} args - Arguments to find a AccountToken
     * @example
     * // Get one AccountToken
     * const accountToken = await prisma.accountToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountTokenFindUniqueArgs>(args: SelectSubset<T, AccountTokenFindUniqueArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountTokenFindUniqueOrThrowArgs} args - Arguments to find a AccountToken
     * @example
     * // Get one AccountToken
     * const accountToken = await prisma.accountToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenFindFirstArgs} args - Arguments to find a AccountToken
     * @example
     * // Get one AccountToken
     * const accountToken = await prisma.accountToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountTokenFindFirstArgs>(args?: SelectSubset<T, AccountTokenFindFirstArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenFindFirstOrThrowArgs} args - Arguments to find a AccountToken
     * @example
     * // Get one AccountToken
     * const accountToken = await prisma.accountToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTokens
     * const accountTokens = await prisma.accountToken.findMany()
     * 
     * // Get first 10 AccountTokens
     * const accountTokens = await prisma.accountToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTokenWithIdOnly = await prisma.accountToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountTokenFindManyArgs>(args?: SelectSubset<T, AccountTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountToken.
     * @param {AccountTokenCreateArgs} args - Arguments to create a AccountToken.
     * @example
     * // Create one AccountToken
     * const AccountToken = await prisma.accountToken.create({
     *   data: {
     *     // ... data to create a AccountToken
     *   }
     * })
     * 
     */
    create<T extends AccountTokenCreateArgs>(args: SelectSubset<T, AccountTokenCreateArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountTokens.
     * @param {AccountTokenCreateManyArgs} args - Arguments to create many AccountTokens.
     * @example
     * // Create many AccountTokens
     * const accountToken = await prisma.accountToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountTokenCreateManyArgs>(args?: SelectSubset<T, AccountTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountTokens and returns the data saved in the database.
     * @param {AccountTokenCreateManyAndReturnArgs} args - Arguments to create many AccountTokens.
     * @example
     * // Create many AccountTokens
     * const accountToken = await prisma.accountToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountTokens and only return the `id`
     * const accountTokenWithIdOnly = await prisma.accountToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AccountToken.
     * @param {AccountTokenDeleteArgs} args - Arguments to delete one AccountToken.
     * @example
     * // Delete one AccountToken
     * const AccountToken = await prisma.accountToken.delete({
     *   where: {
     *     // ... filter to delete one AccountToken
     *   }
     * })
     * 
     */
    delete<T extends AccountTokenDeleteArgs>(args: SelectSubset<T, AccountTokenDeleteArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountToken.
     * @param {AccountTokenUpdateArgs} args - Arguments to update one AccountToken.
     * @example
     * // Update one AccountToken
     * const accountToken = await prisma.accountToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountTokenUpdateArgs>(args: SelectSubset<T, AccountTokenUpdateArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountTokens.
     * @param {AccountTokenDeleteManyArgs} args - Arguments to filter AccountTokens to delete.
     * @example
     * // Delete a few AccountTokens
     * const { count } = await prisma.accountToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountTokenDeleteManyArgs>(args?: SelectSubset<T, AccountTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTokens
     * const accountToken = await prisma.accountToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountTokenUpdateManyArgs>(args: SelectSubset<T, AccountTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountToken.
     * @param {AccountTokenUpsertArgs} args - Arguments to update or create a AccountToken.
     * @example
     * // Update or create a AccountToken
     * const accountToken = await prisma.accountToken.upsert({
     *   create: {
     *     // ... data to create a AccountToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountToken we want to update
     *   }
     * })
     */
    upsert<T extends AccountTokenUpsertArgs>(args: SelectSubset<T, AccountTokenUpsertArgs<ExtArgs>>): Prisma__AccountTokenClient<$Result.GetResult<Prisma.$AccountTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenCountArgs} args - Arguments to filter AccountTokens to count.
     * @example
     * // Count the number of AccountTokens
     * const count = await prisma.accountToken.count({
     *   where: {
     *     // ... the filter for the AccountTokens we want to count
     *   }
     * })
    **/
    count<T extends AccountTokenCountArgs>(
      args?: Subset<T, AccountTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTokenAggregateArgs>(args: Subset<T, AccountTokenAggregateArgs>): Prisma.PrismaPromise<GetAccountTokenAggregateType<T>>

    /**
     * Group by AccountToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccountTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountToken model
   */
  readonly fields: AccountTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountToken model
   */ 
  interface AccountTokenFieldRefs {
    readonly id: FieldRef<"AccountToken", 'Int'>
    readonly token: FieldRef<"AccountToken", 'String'>
    readonly createdAt: FieldRef<"AccountToken", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountToken", 'DateTime'>
    readonly accountId: FieldRef<"AccountToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccountToken findUnique
   */
  export type AccountTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccountToken to fetch.
     */
    where: AccountTokenWhereUniqueInput
  }

  /**
   * AccountToken findUniqueOrThrow
   */
  export type AccountTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccountToken to fetch.
     */
    where: AccountTokenWhereUniqueInput
  }

  /**
   * AccountToken findFirst
   */
  export type AccountTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccountToken to fetch.
     */
    where?: AccountTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokens to fetch.
     */
    orderBy?: AccountTokenOrderByWithRelationInput | AccountTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTokens.
     */
    cursor?: AccountTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTokens.
     */
    distinct?: AccountTokenScalarFieldEnum | AccountTokenScalarFieldEnum[]
  }

  /**
   * AccountToken findFirstOrThrow
   */
  export type AccountTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccountToken to fetch.
     */
    where?: AccountTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokens to fetch.
     */
    orderBy?: AccountTokenOrderByWithRelationInput | AccountTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTokens.
     */
    cursor?: AccountTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTokens.
     */
    distinct?: AccountTokenScalarFieldEnum | AccountTokenScalarFieldEnum[]
  }

  /**
   * AccountToken findMany
   */
  export type AccountTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccountTokens to fetch.
     */
    where?: AccountTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokens to fetch.
     */
    orderBy?: AccountTokenOrderByWithRelationInput | AccountTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTokens.
     */
    cursor?: AccountTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokens.
     */
    skip?: number
    distinct?: AccountTokenScalarFieldEnum | AccountTokenScalarFieldEnum[]
  }

  /**
   * AccountToken create
   */
  export type AccountTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountToken.
     */
    data: XOR<AccountTokenCreateInput, AccountTokenUncheckedCreateInput>
  }

  /**
   * AccountToken createMany
   */
  export type AccountTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTokens.
     */
    data: AccountTokenCreateManyInput | AccountTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountToken createManyAndReturn
   */
  export type AccountTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AccountTokens.
     */
    data: AccountTokenCreateManyInput | AccountTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountToken update
   */
  export type AccountTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountToken.
     */
    data: XOR<AccountTokenUpdateInput, AccountTokenUncheckedUpdateInput>
    /**
     * Choose, which AccountToken to update.
     */
    where: AccountTokenWhereUniqueInput
  }

  /**
   * AccountToken updateMany
   */
  export type AccountTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTokens.
     */
    data: XOR<AccountTokenUpdateManyMutationInput, AccountTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccountTokens to update
     */
    where?: AccountTokenWhereInput
  }

  /**
   * AccountToken upsert
   */
  export type AccountTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountToken to update in case it exists.
     */
    where: AccountTokenWhereUniqueInput
    /**
     * In case the AccountToken found by the `where` argument doesn't exist, create a new AccountToken with this data.
     */
    create: XOR<AccountTokenCreateInput, AccountTokenUncheckedCreateInput>
    /**
     * In case the AccountToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTokenUpdateInput, AccountTokenUncheckedUpdateInput>
  }

  /**
   * AccountToken delete
   */
  export type AccountTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
    /**
     * Filter which AccountToken to delete.
     */
    where: AccountTokenWhereUniqueInput
  }

  /**
   * AccountToken deleteMany
   */
  export type AccountTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTokens to delete
     */
    where?: AccountTokenWhereInput
  }

  /**
   * AccountToken without action
   */
  export type AccountTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountToken
     */
    select?: AccountTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTokenInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    gender: $Enums.USER__GENDER_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    gender: $Enums.USER__GENDER_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    avatarUrl: number
    gender: number
    createdAt: number
    updatedAt: number
    accountId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt: Date
    updatedAt: Date
    accountId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingLotReviews?: boolean | User$parkingLotReviewsArgs<ExtArgs>
    parkingLots?: boolean | User$parkingLotsArgs<ExtArgs>
    paymentRecords?: boolean | User$paymentRecordsArgs<ExtArgs>
    userNotifications?: boolean | User$userNotificationsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    parkingLotReviews?: boolean | User$parkingLotReviewsArgs<ExtArgs>
    parkingLots?: boolean | User$parkingLotsArgs<ExtArgs>
    paymentRecords?: boolean | User$paymentRecordsArgs<ExtArgs>
    userNotifications?: boolean | User$userNotificationsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      parkingLotReviews: Prisma.$ParkingLotReviewPayload<ExtArgs>[]
      parkingLots: Prisma.$ParkingLotPayload<ExtArgs>[]
      paymentRecords: Prisma.$PaymentRecordPayload<ExtArgs>[]
      userNotifications: Prisma.$UserNotificationPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      phone: string
      avatarUrl: string | null
      gender: $Enums.USER__GENDER_ALIAS
      createdAt: Date
      updatedAt: Date
      accountId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany"> | Null>
    parkingLotReviews<T extends User$parkingLotReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingLotReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findMany"> | Null>
    parkingLots<T extends User$parkingLotsArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany"> | Null>
    paymentRecords<T extends User$paymentRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany"> | Null>
    userNotifications<T extends User$userNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$userNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findMany"> | Null>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'USER__GENDER_ALIAS'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly accountId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.parkingLotReviews
   */
  export type User$parkingLotReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    where?: ParkingLotReviewWhereInput
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    cursor?: ParkingLotReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotReviewScalarFieldEnum | ParkingLotReviewScalarFieldEnum[]
  }

  /**
   * User.parkingLots
   */
  export type User$parkingLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    cursor?: ParkingLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * User.paymentRecords
   */
  export type User$paymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * User.userNotifications
   */
  export type User$userNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    where?: UserNotificationWhereInput
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    cursor?: UserNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserNotification
   */

  export type AggregateUserNotification = {
    _count: UserNotificationCountAggregateOutputType | null
    _avg: UserNotificationAvgAggregateOutputType | null
    _sum: UserNotificationSumAggregateOutputType | null
    _min: UserNotificationMinAggregateOutputType | null
    _max: UserNotificationMaxAggregateOutputType | null
  }

  export type UserNotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserNotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserNotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type UserNotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type UserNotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    read: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type UserNotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserNotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserNotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserNotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserNotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type UserNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotification to aggregate.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNotifications
    **/
    _count?: true | UserNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNotificationMaxAggregateInputType
  }

  export type GetUserNotificationAggregateType<T extends UserNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNotification[P]>
      : GetScalarType<T[P], AggregateUserNotification[P]>
  }




  export type UserNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNotificationWhereInput
    orderBy?: UserNotificationOrderByWithAggregationInput | UserNotificationOrderByWithAggregationInput[]
    by: UserNotificationScalarFieldEnum[] | UserNotificationScalarFieldEnum
    having?: UserNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNotificationCountAggregateInputType | true
    _avg?: UserNotificationAvgAggregateInputType
    _sum?: UserNotificationSumAggregateInputType
    _min?: UserNotificationMinAggregateInputType
    _max?: UserNotificationMaxAggregateInputType
  }

  export type UserNotificationGroupByOutputType = {
    id: number
    title: string
    message: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: UserNotificationCountAggregateOutputType | null
    _avg: UserNotificationAvgAggregateOutputType | null
    _sum: UserNotificationSumAggregateOutputType | null
    _min: UserNotificationMinAggregateOutputType | null
    _max: UserNotificationMaxAggregateOutputType | null
  }

  type GetUserNotificationGroupByPayload<T extends UserNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], UserNotificationGroupByOutputType[P]>
        }
      >
    >


  export type UserNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNotification"]>

  export type UserNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNotification"]>

  export type UserNotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type UserNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      read: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["userNotification"]>
    composites: {}
  }

  type UserNotificationGetPayload<S extends boolean | null | undefined | UserNotificationDefaultArgs> = $Result.GetResult<Prisma.$UserNotificationPayload, S>

  type UserNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserNotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserNotificationCountAggregateInputType | true
    }

  export interface UserNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNotification'], meta: { name: 'UserNotification' } }
    /**
     * Find zero or one UserNotification that matches the filter.
     * @param {UserNotificationFindUniqueArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNotificationFindUniqueArgs>(args: SelectSubset<T, UserNotificationFindUniqueArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserNotification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserNotificationFindUniqueOrThrowArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindFirstArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNotificationFindFirstArgs>(args?: SelectSubset<T, UserNotificationFindFirstArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindFirstOrThrowArgs} args - Arguments to find a UserNotification
     * @example
     * // Get one UserNotification
     * const userNotification = await prisma.userNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNotifications
     * const userNotifications = await prisma.userNotification.findMany()
     * 
     * // Get first 10 UserNotifications
     * const userNotifications = await prisma.userNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNotificationWithIdOnly = await prisma.userNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNotificationFindManyArgs>(args?: SelectSubset<T, UserNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserNotification.
     * @param {UserNotificationCreateArgs} args - Arguments to create a UserNotification.
     * @example
     * // Create one UserNotification
     * const UserNotification = await prisma.userNotification.create({
     *   data: {
     *     // ... data to create a UserNotification
     *   }
     * })
     * 
     */
    create<T extends UserNotificationCreateArgs>(args: SelectSubset<T, UserNotificationCreateArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserNotifications.
     * @param {UserNotificationCreateManyArgs} args - Arguments to create many UserNotifications.
     * @example
     * // Create many UserNotifications
     * const userNotification = await prisma.userNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNotificationCreateManyArgs>(args?: SelectSubset<T, UserNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserNotifications and returns the data saved in the database.
     * @param {UserNotificationCreateManyAndReturnArgs} args - Arguments to create many UserNotifications.
     * @example
     * // Create many UserNotifications
     * const userNotification = await prisma.userNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserNotifications and only return the `id`
     * const userNotificationWithIdOnly = await prisma.userNotification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserNotification.
     * @param {UserNotificationDeleteArgs} args - Arguments to delete one UserNotification.
     * @example
     * // Delete one UserNotification
     * const UserNotification = await prisma.userNotification.delete({
     *   where: {
     *     // ... filter to delete one UserNotification
     *   }
     * })
     * 
     */
    delete<T extends UserNotificationDeleteArgs>(args: SelectSubset<T, UserNotificationDeleteArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserNotification.
     * @param {UserNotificationUpdateArgs} args - Arguments to update one UserNotification.
     * @example
     * // Update one UserNotification
     * const userNotification = await prisma.userNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNotificationUpdateArgs>(args: SelectSubset<T, UserNotificationUpdateArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserNotifications.
     * @param {UserNotificationDeleteManyArgs} args - Arguments to filter UserNotifications to delete.
     * @example
     * // Delete a few UserNotifications
     * const { count } = await prisma.userNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNotificationDeleteManyArgs>(args?: SelectSubset<T, UserNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNotifications
     * const userNotification = await prisma.userNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNotificationUpdateManyArgs>(args: SelectSubset<T, UserNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserNotification.
     * @param {UserNotificationUpsertArgs} args - Arguments to update or create a UserNotification.
     * @example
     * // Update or create a UserNotification
     * const userNotification = await prisma.userNotification.upsert({
     *   create: {
     *     // ... data to create a UserNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNotification we want to update
     *   }
     * })
     */
    upsert<T extends UserNotificationUpsertArgs>(args: SelectSubset<T, UserNotificationUpsertArgs<ExtArgs>>): Prisma__UserNotificationClient<$Result.GetResult<Prisma.$UserNotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationCountArgs} args - Arguments to filter UserNotifications to count.
     * @example
     * // Count the number of UserNotifications
     * const count = await prisma.userNotification.count({
     *   where: {
     *     // ... the filter for the UserNotifications we want to count
     *   }
     * })
    **/
    count<T extends UserNotificationCountArgs>(
      args?: Subset<T, UserNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserNotificationAggregateArgs>(args: Subset<T, UserNotificationAggregateArgs>): Prisma.PrismaPromise<GetUserNotificationAggregateType<T>>

    /**
     * Group by UserNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNotificationGroupByArgs['orderBy'] }
        : { orderBy?: UserNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNotification model
   */
  readonly fields: UserNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserNotification model
   */ 
  interface UserNotificationFieldRefs {
    readonly id: FieldRef<"UserNotification", 'Int'>
    readonly title: FieldRef<"UserNotification", 'String'>
    readonly message: FieldRef<"UserNotification", 'String'>
    readonly read: FieldRef<"UserNotification", 'Boolean'>
    readonly createdAt: FieldRef<"UserNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"UserNotification", 'DateTime'>
    readonly userId: FieldRef<"UserNotification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserNotification findUnique
   */
  export type UserNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification findUniqueOrThrow
   */
  export type UserNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification findFirst
   */
  export type UserNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotifications.
     */
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification findFirstOrThrow
   */
  export type UserNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotification to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNotifications.
     */
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification findMany
   */
  export type UserNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter, which UserNotifications to fetch.
     */
    where?: UserNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNotifications to fetch.
     */
    orderBy?: UserNotificationOrderByWithRelationInput | UserNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNotifications.
     */
    cursor?: UserNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNotifications.
     */
    skip?: number
    distinct?: UserNotificationScalarFieldEnum | UserNotificationScalarFieldEnum[]
  }

  /**
   * UserNotification create
   */
  export type UserNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNotification.
     */
    data: XOR<UserNotificationCreateInput, UserNotificationUncheckedCreateInput>
  }

  /**
   * UserNotification createMany
   */
  export type UserNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNotifications.
     */
    data: UserNotificationCreateManyInput | UserNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserNotification createManyAndReturn
   */
  export type UserNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserNotifications.
     */
    data: UserNotificationCreateManyInput | UserNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserNotification update
   */
  export type UserNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNotification.
     */
    data: XOR<UserNotificationUpdateInput, UserNotificationUncheckedUpdateInput>
    /**
     * Choose, which UserNotification to update.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification updateMany
   */
  export type UserNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNotifications.
     */
    data: XOR<UserNotificationUpdateManyMutationInput, UserNotificationUncheckedUpdateManyInput>
    /**
     * Filter which UserNotifications to update
     */
    where?: UserNotificationWhereInput
  }

  /**
   * UserNotification upsert
   */
  export type UserNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNotification to update in case it exists.
     */
    where: UserNotificationWhereUniqueInput
    /**
     * In case the UserNotification found by the `where` argument doesn't exist, create a new UserNotification with this data.
     */
    create: XOR<UserNotificationCreateInput, UserNotificationUncheckedCreateInput>
    /**
     * In case the UserNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNotificationUpdateInput, UserNotificationUncheckedUpdateInput>
  }

  /**
   * UserNotification delete
   */
  export type UserNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
    /**
     * Filter which UserNotification to delete.
     */
    where: UserNotificationWhereUniqueInput
  }

  /**
   * UserNotification deleteMany
   */
  export type UserNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNotifications to delete
     */
    where?: UserNotificationWhereInput
  }

  /**
   * UserNotification without action
   */
  export type UserNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNotification
     */
    select?: UserNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNotificationInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    type: $Enums.VEHICLE__TYPE_ALIAS | null
    plate: string | null
    brand: string | null
    model: string | null
    color: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    type: $Enums.VEHICLE__TYPE_ALIAS | null
    plate: string | null
    brand: string | null
    model: string | null
    color: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    type: number
    plate: number
    brand: number
    model: number
    color: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    type?: true
    plate?: true
    brand?: true
    model?: true
    color?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    type?: true
    plate?: true
    brand?: true
    model?: true
    color?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    type?: true
    plate?: true
    brand?: true
    model?: true
    color?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    reservations?: boolean | Vehicle$reservationsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    type?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Vehicle$reservationsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.VEHICLE__TYPE_ALIAS
      plate: string
      brand: string
      model: string
      color: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Vehicle$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    parkingRecords<T extends Vehicle$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany"> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly type: FieldRef<"Vehicle", 'VEHICLE__TYPE_ALIAS'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly imageUrl: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
    readonly ownerId: FieldRef<"Vehicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle.reservations
   */
  export type Vehicle$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Vehicle.parkingRecords
   */
  export type Vehicle$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLot
   */

  export type AggregateParkingLot = {
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  export type ParkingLotAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    ratings: number | null
    ownerId: number | null
  }

  export type ParkingLotSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    ratings: number | null
    ownerId: number | null
  }

  export type ParkingLotMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    ratings: number | null
    phone: string | null
    openAt: string | null
    closeAt: string | null
    status: $Enums.PARKING_LOT__STATUS_ALIAS | null
    isApproved: boolean | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type ParkingLotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    ratings: number | null
    phone: string | null
    openAt: string | null
    closeAt: string | null
    status: $Enums.PARKING_LOT__STATUS_ALIAS | null
    isApproved: boolean | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type ParkingLotCountAggregateOutputType = {
    id: number
    name: number
    description: number
    latitude: number
    longitude: number
    mediaUrls: number
    ratings: number
    phone: number
    openAt: number
    closeAt: number
    status: number
    isApproved: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ParkingLotAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    ratings?: true
    ownerId?: true
  }

  export type ParkingLotSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    ratings?: true
    ownerId?: true
  }

  export type ParkingLotMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    ratings?: true
    phone?: true
    openAt?: true
    closeAt?: true
    status?: true
    isApproved?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ParkingLotMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    ratings?: true
    phone?: true
    openAt?: true
    closeAt?: true
    status?: true
    isApproved?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ParkingLotCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    mediaUrls?: true
    ratings?: true
    phone?: true
    openAt?: true
    closeAt?: true
    status?: true
    isApproved?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ParkingLotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLot to aggregate.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLots
    **/
    _count?: true | ParkingLotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotMaxAggregateInputType
  }

  export type GetParkingLotAggregateType<T extends ParkingLotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLot[P]>
      : GetScalarType<T[P], AggregateParkingLot[P]>
  }




  export type ParkingLotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithAggregationInput | ParkingLotOrderByWithAggregationInput[]
    by: ParkingLotScalarFieldEnum[] | ParkingLotScalarFieldEnum
    having?: ParkingLotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotCountAggregateInputType | true
    _avg?: ParkingLotAvgAggregateInputType
    _sum?: ParkingLotSumAggregateInputType
    _min?: ParkingLotMinAggregateInputType
    _max?: ParkingLotMaxAggregateInputType
  }

  export type ParkingLotGroupByOutputType = {
    id: number
    name: string
    description: string
    latitude: number
    longitude: number
    mediaUrls: string[]
    ratings: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved: boolean
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  type GetParkingLotGroupByPayload<T extends ParkingLotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    mediaUrls?: boolean
    ratings?: boolean
    phone?: boolean
    openAt?: boolean
    closeAt?: boolean
    status?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    parkingSpots?: boolean | ParkingLot$parkingSpotsArgs<ExtArgs>
    parkingLotServices?: boolean | ParkingLot$parkingLotServicesArgs<ExtArgs>
    parkingLotReviews?: boolean | ParkingLot$parkingLotReviewsArgs<ExtArgs>
    parkingLotPrices?: boolean | ParkingLot$parkingLotPricesArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    mediaUrls?: boolean
    ratings?: boolean
    phone?: boolean
    openAt?: boolean
    closeAt?: boolean
    status?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    mediaUrls?: boolean
    ratings?: boolean
    phone?: boolean
    openAt?: boolean
    closeAt?: boolean
    status?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type ParkingLotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSpots?: boolean | ParkingLot$parkingSpotsArgs<ExtArgs>
    parkingLotServices?: boolean | ParkingLot$parkingLotServicesArgs<ExtArgs>
    parkingLotReviews?: boolean | ParkingLot$parkingLotReviewsArgs<ExtArgs>
    parkingLotPrices?: boolean | ParkingLot$parkingLotPricesArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingLotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingLotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLot"
    objects: {
      parkingSpots: Prisma.$ParkingSpotPayload<ExtArgs>[]
      parkingLotServices: Prisma.$ParkingLotServicePayload<ExtArgs>[]
      parkingLotReviews: Prisma.$ParkingLotReviewPayload<ExtArgs>[]
      parkingLotPrices: Prisma.$ParkingLotPricePayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      latitude: number
      longitude: number
      mediaUrls: string[]
      ratings: number
      phone: string
      openAt: string
      closeAt: string
      status: $Enums.PARKING_LOT__STATUS_ALIAS
      isApproved: boolean
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["parkingLot"]>
    composites: {}
  }

  type ParkingLotGetPayload<S extends boolean | null | undefined | ParkingLotDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotPayload, S>

  type ParkingLotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingLotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingLotCountAggregateInputType | true
    }

  export interface ParkingLotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLot'], meta: { name: 'ParkingLot' } }
    /**
     * Find zero or one ParkingLot that matches the filter.
     * @param {ParkingLotFindUniqueArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotFindUniqueArgs>(args: SelectSubset<T, ParkingLotFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingLot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingLotFindUniqueOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotFindFirstArgs>(args?: SelectSubset<T, ParkingLotFindFirstArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany()
     * 
     * // Get first 10 ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingLotWithIdOnly = await prisma.parkingLot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingLotFindManyArgs>(args?: SelectSubset<T, ParkingLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingLot.
     * @param {ParkingLotCreateArgs} args - Arguments to create a ParkingLot.
     * @example
     * // Create one ParkingLot
     * const ParkingLot = await prisma.parkingLot.create({
     *   data: {
     *     // ... data to create a ParkingLot
     *   }
     * })
     * 
     */
    create<T extends ParkingLotCreateArgs>(args: SelectSubset<T, ParkingLotCreateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingLots.
     * @param {ParkingLotCreateManyArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotCreateManyArgs>(args?: SelectSubset<T, ParkingLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLots and returns the data saved in the database.
     * @param {ParkingLotCreateManyAndReturnArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLots and only return the `id`
     * const parkingLotWithIdOnly = await prisma.parkingLot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingLot.
     * @param {ParkingLotDeleteArgs} args - Arguments to delete one ParkingLot.
     * @example
     * // Delete one ParkingLot
     * const ParkingLot = await prisma.parkingLot.delete({
     *   where: {
     *     // ... filter to delete one ParkingLot
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotDeleteArgs>(args: SelectSubset<T, ParkingLotDeleteArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingLot.
     * @param {ParkingLotUpdateArgs} args - Arguments to update one ParkingLot.
     * @example
     * // Update one ParkingLot
     * const parkingLot = await prisma.parkingLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotUpdateArgs>(args: SelectSubset<T, ParkingLotUpdateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingLots.
     * @param {ParkingLotDeleteManyArgs} args - Arguments to filter ParkingLots to delete.
     * @example
     * // Delete a few ParkingLots
     * const { count } = await prisma.parkingLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotDeleteManyArgs>(args?: SelectSubset<T, ParkingLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotUpdateManyArgs>(args: SelectSubset<T, ParkingLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingLot.
     * @param {ParkingLotUpsertArgs} args - Arguments to update or create a ParkingLot.
     * @example
     * // Update or create a ParkingLot
     * const parkingLot = await prisma.parkingLot.upsert({
     *   create: {
     *     // ... data to create a ParkingLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotUpsertArgs>(args: SelectSubset<T, ParkingLotUpsertArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotCountArgs} args - Arguments to filter ParkingLots to count.
     * @example
     * // Count the number of ParkingLots
     * const count = await prisma.parkingLot.count({
     *   where: {
     *     // ... the filter for the ParkingLots we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotCountArgs>(
      args?: Subset<T, ParkingLotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotAggregateArgs>(args: Subset<T, ParkingLotAggregateArgs>): Prisma.PrismaPromise<GetParkingLotAggregateType<T>>

    /**
     * Group by ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLot model
   */
  readonly fields: ParkingLotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSpots<T extends ParkingLot$parkingSpotsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingSpotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findMany"> | Null>
    parkingLotServices<T extends ParkingLot$parkingLotServicesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingLotServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findMany"> | Null>
    parkingLotReviews<T extends ParkingLot$parkingLotReviewsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingLotReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findMany"> | Null>
    parkingLotPrices<T extends ParkingLot$parkingLotPricesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingLotPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findMany"> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLot model
   */ 
  interface ParkingLotFieldRefs {
    readonly id: FieldRef<"ParkingLot", 'Int'>
    readonly name: FieldRef<"ParkingLot", 'String'>
    readonly description: FieldRef<"ParkingLot", 'String'>
    readonly latitude: FieldRef<"ParkingLot", 'Float'>
    readonly longitude: FieldRef<"ParkingLot", 'Float'>
    readonly mediaUrls: FieldRef<"ParkingLot", 'String[]'>
    readonly ratings: FieldRef<"ParkingLot", 'Float'>
    readonly phone: FieldRef<"ParkingLot", 'String'>
    readonly openAt: FieldRef<"ParkingLot", 'String'>
    readonly closeAt: FieldRef<"ParkingLot", 'String'>
    readonly status: FieldRef<"ParkingLot", 'PARKING_LOT__STATUS_ALIAS'>
    readonly isApproved: FieldRef<"ParkingLot", 'Boolean'>
    readonly approvedAt: FieldRef<"ParkingLot", 'DateTime'>
    readonly createdAt: FieldRef<"ParkingLot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLot", 'DateTime'>
    readonly ownerId: FieldRef<"ParkingLot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLot findUnique
   */
  export type ParkingLotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findUniqueOrThrow
   */
  export type ParkingLotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findFirst
   */
  export type ParkingLotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findFirstOrThrow
   */
  export type ParkingLotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findMany
   */
  export type ParkingLotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLots to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot create
   */
  export type ParkingLotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLot.
     */
    data: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
  }

  /**
   * ParkingLot createMany
   */
  export type ParkingLotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot createManyAndReturn
   */
  export type ParkingLotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLot update
   */
  export type ParkingLotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLot.
     */
    data: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
    /**
     * Choose, which ParkingLot to update.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot updateMany
   */
  export type ParkingLotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
  }

  /**
   * ParkingLot upsert
   */
  export type ParkingLotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLot to update in case it exists.
     */
    where: ParkingLotWhereUniqueInput
    /**
     * In case the ParkingLot found by the `where` argument doesn't exist, create a new ParkingLot with this data.
     */
    create: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
    /**
     * In case the ParkingLot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
  }

  /**
   * ParkingLot delete
   */
  export type ParkingLotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter which ParkingLot to delete.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot deleteMany
   */
  export type ParkingLotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLots to delete
     */
    where?: ParkingLotWhereInput
  }

  /**
   * ParkingLot.parkingSpots
   */
  export type ParkingLot$parkingSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    cursor?: ParkingSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingLot.parkingLotServices
   */
  export type ParkingLot$parkingLotServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    where?: ParkingLotServiceWhereInput
    orderBy?: ParkingLotServiceOrderByWithRelationInput | ParkingLotServiceOrderByWithRelationInput[]
    cursor?: ParkingLotServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotServiceScalarFieldEnum | ParkingLotServiceScalarFieldEnum[]
  }

  /**
   * ParkingLot.parkingLotReviews
   */
  export type ParkingLot$parkingLotReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    where?: ParkingLotReviewWhereInput
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    cursor?: ParkingLotReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotReviewScalarFieldEnum | ParkingLotReviewScalarFieldEnum[]
  }

  /**
   * ParkingLot.parkingLotPrices
   */
  export type ParkingLot$parkingLotPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    where?: ParkingLotPriceWhereInput
    orderBy?: ParkingLotPriceOrderByWithRelationInput | ParkingLotPriceOrderByWithRelationInput[]
    cursor?: ParkingLotPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingLotPriceScalarFieldEnum | ParkingLotPriceScalarFieldEnum[]
  }

  /**
   * ParkingLot without action
   */
  export type ParkingLotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLotPrice
   */

  export type AggregateParkingLotPrice = {
    _count: ParkingLotPriceCountAggregateOutputType | null
    _avg: ParkingLotPriceAvgAggregateOutputType | null
    _sum: ParkingLotPriceSumAggregateOutputType | null
    _min: ParkingLotPriceMinAggregateOutputType | null
    _max: ParkingLotPriceMaxAggregateOutputType | null
  }

  export type ParkingLotPriceAvgAggregateOutputType = {
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotPriceSumAggregateOutputType = {
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotPriceMinAggregateOutputType = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS | null
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotPriceMaxAggregateOutputType = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS | null
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotPriceCountAggregateOutputType = {
    vehicleType: number
    price: number
    parkingLotId: number
    _all: number
  }


  export type ParkingLotPriceAvgAggregateInputType = {
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotPriceSumAggregateInputType = {
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotPriceMinAggregateInputType = {
    vehicleType?: true
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotPriceMaxAggregateInputType = {
    vehicleType?: true
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotPriceCountAggregateInputType = {
    vehicleType?: true
    price?: true
    parkingLotId?: true
    _all?: true
  }

  export type ParkingLotPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotPrice to aggregate.
     */
    where?: ParkingLotPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotPrices to fetch.
     */
    orderBy?: ParkingLotPriceOrderByWithRelationInput | ParkingLotPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLotPrices
    **/
    _count?: true | ParkingLotPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotPriceMaxAggregateInputType
  }

  export type GetParkingLotPriceAggregateType<T extends ParkingLotPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLotPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLotPrice[P]>
      : GetScalarType<T[P], AggregateParkingLotPrice[P]>
  }




  export type ParkingLotPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotPriceWhereInput
    orderBy?: ParkingLotPriceOrderByWithAggregationInput | ParkingLotPriceOrderByWithAggregationInput[]
    by: ParkingLotPriceScalarFieldEnum[] | ParkingLotPriceScalarFieldEnum
    having?: ParkingLotPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotPriceCountAggregateInputType | true
    _avg?: ParkingLotPriceAvgAggregateInputType
    _sum?: ParkingLotPriceSumAggregateInputType
    _min?: ParkingLotPriceMinAggregateInputType
    _max?: ParkingLotPriceMaxAggregateInputType
  }

  export type ParkingLotPriceGroupByOutputType = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
    parkingLotId: number
    _count: ParkingLotPriceCountAggregateOutputType | null
    _avg: ParkingLotPriceAvgAggregateOutputType | null
    _sum: ParkingLotPriceSumAggregateOutputType | null
    _min: ParkingLotPriceMinAggregateOutputType | null
    _max: ParkingLotPriceMaxAggregateOutputType | null
  }

  type GetParkingLotPriceGroupByPayload<T extends ParkingLotPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotPriceGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleType?: boolean
    price?: boolean
    parkingLotId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotPrice"]>

  export type ParkingLotPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleType?: boolean
    price?: boolean
    parkingLotId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotPrice"]>

  export type ParkingLotPriceSelectScalar = {
    vehicleType?: boolean
    price?: boolean
    parkingLotId?: boolean
  }

  export type ParkingLotPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ParkingLotPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ParkingLotPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLotPrice"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicleType: $Enums.VEHICLE__TYPE_ALIAS
      price: number
      parkingLotId: number
    }, ExtArgs["result"]["parkingLotPrice"]>
    composites: {}
  }

  type ParkingLotPriceGetPayload<S extends boolean | null | undefined | ParkingLotPriceDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotPricePayload, S>

  type ParkingLotPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingLotPriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingLotPriceCountAggregateInputType | true
    }

  export interface ParkingLotPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLotPrice'], meta: { name: 'ParkingLotPrice' } }
    /**
     * Find zero or one ParkingLotPrice that matches the filter.
     * @param {ParkingLotPriceFindUniqueArgs} args - Arguments to find a ParkingLotPrice
     * @example
     * // Get one ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotPriceFindUniqueArgs>(args: SelectSubset<T, ParkingLotPriceFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingLotPrice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingLotPriceFindUniqueOrThrowArgs} args - Arguments to find a ParkingLotPrice
     * @example
     * // Get one ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingLotPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceFindFirstArgs} args - Arguments to find a ParkingLotPrice
     * @example
     * // Get one ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotPriceFindFirstArgs>(args?: SelectSubset<T, ParkingLotPriceFindFirstArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingLotPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceFindFirstOrThrowArgs} args - Arguments to find a ParkingLotPrice
     * @example
     * // Get one ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingLotPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLotPrices
     * const parkingLotPrices = await prisma.parkingLotPrice.findMany()
     * 
     * // Get first 10 ParkingLotPrices
     * const parkingLotPrices = await prisma.parkingLotPrice.findMany({ take: 10 })
     * 
     * // Only select the `price`
     * const parkingLotPriceWithPriceOnly = await prisma.parkingLotPrice.findMany({ select: { price: true } })
     * 
     */
    findMany<T extends ParkingLotPriceFindManyArgs>(args?: SelectSubset<T, ParkingLotPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingLotPrice.
     * @param {ParkingLotPriceCreateArgs} args - Arguments to create a ParkingLotPrice.
     * @example
     * // Create one ParkingLotPrice
     * const ParkingLotPrice = await prisma.parkingLotPrice.create({
     *   data: {
     *     // ... data to create a ParkingLotPrice
     *   }
     * })
     * 
     */
    create<T extends ParkingLotPriceCreateArgs>(args: SelectSubset<T, ParkingLotPriceCreateArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingLotPrices.
     * @param {ParkingLotPriceCreateManyArgs} args - Arguments to create many ParkingLotPrices.
     * @example
     * // Create many ParkingLotPrices
     * const parkingLotPrice = await prisma.parkingLotPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotPriceCreateManyArgs>(args?: SelectSubset<T, ParkingLotPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLotPrices and returns the data saved in the database.
     * @param {ParkingLotPriceCreateManyAndReturnArgs} args - Arguments to create many ParkingLotPrices.
     * @example
     * // Create many ParkingLotPrices
     * const parkingLotPrice = await prisma.parkingLotPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLotPrices and only return the `price`
     * const parkingLotPriceWithPriceOnly = await prisma.parkingLotPrice.createManyAndReturn({ 
     *   select: { price: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingLotPrice.
     * @param {ParkingLotPriceDeleteArgs} args - Arguments to delete one ParkingLotPrice.
     * @example
     * // Delete one ParkingLotPrice
     * const ParkingLotPrice = await prisma.parkingLotPrice.delete({
     *   where: {
     *     // ... filter to delete one ParkingLotPrice
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotPriceDeleteArgs>(args: SelectSubset<T, ParkingLotPriceDeleteArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingLotPrice.
     * @param {ParkingLotPriceUpdateArgs} args - Arguments to update one ParkingLotPrice.
     * @example
     * // Update one ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotPriceUpdateArgs>(args: SelectSubset<T, ParkingLotPriceUpdateArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingLotPrices.
     * @param {ParkingLotPriceDeleteManyArgs} args - Arguments to filter ParkingLotPrices to delete.
     * @example
     * // Delete a few ParkingLotPrices
     * const { count } = await prisma.parkingLotPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotPriceDeleteManyArgs>(args?: SelectSubset<T, ParkingLotPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLotPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLotPrices
     * const parkingLotPrice = await prisma.parkingLotPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotPriceUpdateManyArgs>(args: SelectSubset<T, ParkingLotPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingLotPrice.
     * @param {ParkingLotPriceUpsertArgs} args - Arguments to update or create a ParkingLotPrice.
     * @example
     * // Update or create a ParkingLotPrice
     * const parkingLotPrice = await prisma.parkingLotPrice.upsert({
     *   create: {
     *     // ... data to create a ParkingLotPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLotPrice we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotPriceUpsertArgs>(args: SelectSubset<T, ParkingLotPriceUpsertArgs<ExtArgs>>): Prisma__ParkingLotPriceClient<$Result.GetResult<Prisma.$ParkingLotPricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingLotPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceCountArgs} args - Arguments to filter ParkingLotPrices to count.
     * @example
     * // Count the number of ParkingLotPrices
     * const count = await prisma.parkingLotPrice.count({
     *   where: {
     *     // ... the filter for the ParkingLotPrices we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotPriceCountArgs>(
      args?: Subset<T, ParkingLotPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLotPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotPriceAggregateArgs>(args: Subset<T, ParkingLotPriceAggregateArgs>): Prisma.PrismaPromise<GetParkingLotPriceAggregateType<T>>

    /**
     * Group by ParkingLotPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotPriceGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLotPrice model
   */
  readonly fields: ParkingLotPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLotPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLotPrice model
   */ 
  interface ParkingLotPriceFieldRefs {
    readonly vehicleType: FieldRef<"ParkingLotPrice", 'VEHICLE__TYPE_ALIAS'>
    readonly price: FieldRef<"ParkingLotPrice", 'Float'>
    readonly parkingLotId: FieldRef<"ParkingLotPrice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLotPrice findUnique
   */
  export type ParkingLotPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotPrice to fetch.
     */
    where: ParkingLotPriceWhereUniqueInput
  }

  /**
   * ParkingLotPrice findUniqueOrThrow
   */
  export type ParkingLotPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotPrice to fetch.
     */
    where: ParkingLotPriceWhereUniqueInput
  }

  /**
   * ParkingLotPrice findFirst
   */
  export type ParkingLotPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotPrice to fetch.
     */
    where?: ParkingLotPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotPrices to fetch.
     */
    orderBy?: ParkingLotPriceOrderByWithRelationInput | ParkingLotPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotPrices.
     */
    cursor?: ParkingLotPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotPrices.
     */
    distinct?: ParkingLotPriceScalarFieldEnum | ParkingLotPriceScalarFieldEnum[]
  }

  /**
   * ParkingLotPrice findFirstOrThrow
   */
  export type ParkingLotPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotPrice to fetch.
     */
    where?: ParkingLotPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotPrices to fetch.
     */
    orderBy?: ParkingLotPriceOrderByWithRelationInput | ParkingLotPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotPrices.
     */
    cursor?: ParkingLotPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotPrices.
     */
    distinct?: ParkingLotPriceScalarFieldEnum | ParkingLotPriceScalarFieldEnum[]
  }

  /**
   * ParkingLotPrice findMany
   */
  export type ParkingLotPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotPrices to fetch.
     */
    where?: ParkingLotPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotPrices to fetch.
     */
    orderBy?: ParkingLotPriceOrderByWithRelationInput | ParkingLotPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLotPrices.
     */
    cursor?: ParkingLotPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotPrices.
     */
    skip?: number
    distinct?: ParkingLotPriceScalarFieldEnum | ParkingLotPriceScalarFieldEnum[]
  }

  /**
   * ParkingLotPrice create
   */
  export type ParkingLotPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLotPrice.
     */
    data: XOR<ParkingLotPriceCreateInput, ParkingLotPriceUncheckedCreateInput>
  }

  /**
   * ParkingLotPrice createMany
   */
  export type ParkingLotPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLotPrices.
     */
    data: ParkingLotPriceCreateManyInput | ParkingLotPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLotPrice createManyAndReturn
   */
  export type ParkingLotPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingLotPrices.
     */
    data: ParkingLotPriceCreateManyInput | ParkingLotPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLotPrice update
   */
  export type ParkingLotPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLotPrice.
     */
    data: XOR<ParkingLotPriceUpdateInput, ParkingLotPriceUncheckedUpdateInput>
    /**
     * Choose, which ParkingLotPrice to update.
     */
    where: ParkingLotPriceWhereUniqueInput
  }

  /**
   * ParkingLotPrice updateMany
   */
  export type ParkingLotPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLotPrices.
     */
    data: XOR<ParkingLotPriceUpdateManyMutationInput, ParkingLotPriceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLotPrices to update
     */
    where?: ParkingLotPriceWhereInput
  }

  /**
   * ParkingLotPrice upsert
   */
  export type ParkingLotPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLotPrice to update in case it exists.
     */
    where: ParkingLotPriceWhereUniqueInput
    /**
     * In case the ParkingLotPrice found by the `where` argument doesn't exist, create a new ParkingLotPrice with this data.
     */
    create: XOR<ParkingLotPriceCreateInput, ParkingLotPriceUncheckedCreateInput>
    /**
     * In case the ParkingLotPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotPriceUpdateInput, ParkingLotPriceUncheckedUpdateInput>
  }

  /**
   * ParkingLotPrice delete
   */
  export type ParkingLotPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
    /**
     * Filter which ParkingLotPrice to delete.
     */
    where: ParkingLotPriceWhereUniqueInput
  }

  /**
   * ParkingLotPrice deleteMany
   */
  export type ParkingLotPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotPrices to delete
     */
    where?: ParkingLotPriceWhereInput
  }

  /**
   * ParkingLotPrice without action
   */
  export type ParkingLotPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotPrice
     */
    select?: ParkingLotPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotPriceInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLotReview
   */

  export type AggregateParkingLotReview = {
    _count: ParkingLotReviewCountAggregateOutputType | null
    _avg: ParkingLotReviewAvgAggregateOutputType | null
    _sum: ParkingLotReviewSumAggregateOutputType | null
    _min: ParkingLotReviewMinAggregateOutputType | null
    _max: ParkingLotReviewMaxAggregateOutputType | null
  }

  export type ParkingLotReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    parkingLotId: number | null
    userId: number | null
  }

  export type ParkingLotReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    parkingLotId: number | null
    userId: number | null
  }

  export type ParkingLotReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
    userId: number | null
  }

  export type ParkingLotReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
    userId: number | null
  }

  export type ParkingLotReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    mediaUrls: number
    createdAt: number
    updatedAt: number
    parkingLotId: number
    userId: number
    _all: number
  }


  export type ParkingLotReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    parkingLotId?: true
    userId?: true
  }

  export type ParkingLotReviewSumAggregateInputType = {
    id?: true
    rating?: true
    parkingLotId?: true
    userId?: true
  }

  export type ParkingLotReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
    userId?: true
  }

  export type ParkingLotReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
    userId?: true
  }

  export type ParkingLotReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    mediaUrls?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
    userId?: true
    _all?: true
  }

  export type ParkingLotReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotReview to aggregate.
     */
    where?: ParkingLotReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotReviews to fetch.
     */
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLotReviews
    **/
    _count?: true | ParkingLotReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotReviewMaxAggregateInputType
  }

  export type GetParkingLotReviewAggregateType<T extends ParkingLotReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLotReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLotReview[P]>
      : GetScalarType<T[P], AggregateParkingLotReview[P]>
  }




  export type ParkingLotReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotReviewWhereInput
    orderBy?: ParkingLotReviewOrderByWithAggregationInput | ParkingLotReviewOrderByWithAggregationInput[]
    by: ParkingLotReviewScalarFieldEnum[] | ParkingLotReviewScalarFieldEnum
    having?: ParkingLotReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotReviewCountAggregateInputType | true
    _avg?: ParkingLotReviewAvgAggregateInputType
    _sum?: ParkingLotReviewSumAggregateInputType
    _min?: ParkingLotReviewMinAggregateInputType
    _max?: ParkingLotReviewMaxAggregateInputType
  }

  export type ParkingLotReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string
    mediaUrls: string[]
    createdAt: Date
    updatedAt: Date
    parkingLotId: number
    userId: number
    _count: ParkingLotReviewCountAggregateOutputType | null
    _avg: ParkingLotReviewAvgAggregateOutputType | null
    _sum: ParkingLotReviewSumAggregateOutputType | null
    _min: ParkingLotReviewMinAggregateOutputType | null
    _max: ParkingLotReviewMaxAggregateOutputType | null
  }

  type GetParkingLotReviewGroupByPayload<T extends ParkingLotReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotReviewGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    mediaUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    userId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotReview"]>

  export type ParkingLotReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    mediaUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    userId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotReview"]>

  export type ParkingLotReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    mediaUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    userId?: boolean
  }

  export type ParkingLotReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingLotReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingLotReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLotReview"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      mediaUrls: string[]
      createdAt: Date
      updatedAt: Date
      parkingLotId: number
      userId: number
    }, ExtArgs["result"]["parkingLotReview"]>
    composites: {}
  }

  type ParkingLotReviewGetPayload<S extends boolean | null | undefined | ParkingLotReviewDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotReviewPayload, S>

  type ParkingLotReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingLotReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingLotReviewCountAggregateInputType | true
    }

  export interface ParkingLotReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLotReview'], meta: { name: 'ParkingLotReview' } }
    /**
     * Find zero or one ParkingLotReview that matches the filter.
     * @param {ParkingLotReviewFindUniqueArgs} args - Arguments to find a ParkingLotReview
     * @example
     * // Get one ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotReviewFindUniqueArgs>(args: SelectSubset<T, ParkingLotReviewFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingLotReview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingLotReviewFindUniqueOrThrowArgs} args - Arguments to find a ParkingLotReview
     * @example
     * // Get one ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingLotReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewFindFirstArgs} args - Arguments to find a ParkingLotReview
     * @example
     * // Get one ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotReviewFindFirstArgs>(args?: SelectSubset<T, ParkingLotReviewFindFirstArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingLotReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewFindFirstOrThrowArgs} args - Arguments to find a ParkingLotReview
     * @example
     * // Get one ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingLotReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLotReviews
     * const parkingLotReviews = await prisma.parkingLotReview.findMany()
     * 
     * // Get first 10 ParkingLotReviews
     * const parkingLotReviews = await prisma.parkingLotReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingLotReviewWithIdOnly = await prisma.parkingLotReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingLotReviewFindManyArgs>(args?: SelectSubset<T, ParkingLotReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingLotReview.
     * @param {ParkingLotReviewCreateArgs} args - Arguments to create a ParkingLotReview.
     * @example
     * // Create one ParkingLotReview
     * const ParkingLotReview = await prisma.parkingLotReview.create({
     *   data: {
     *     // ... data to create a ParkingLotReview
     *   }
     * })
     * 
     */
    create<T extends ParkingLotReviewCreateArgs>(args: SelectSubset<T, ParkingLotReviewCreateArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingLotReviews.
     * @param {ParkingLotReviewCreateManyArgs} args - Arguments to create many ParkingLotReviews.
     * @example
     * // Create many ParkingLotReviews
     * const parkingLotReview = await prisma.parkingLotReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotReviewCreateManyArgs>(args?: SelectSubset<T, ParkingLotReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLotReviews and returns the data saved in the database.
     * @param {ParkingLotReviewCreateManyAndReturnArgs} args - Arguments to create many ParkingLotReviews.
     * @example
     * // Create many ParkingLotReviews
     * const parkingLotReview = await prisma.parkingLotReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLotReviews and only return the `id`
     * const parkingLotReviewWithIdOnly = await prisma.parkingLotReview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingLotReview.
     * @param {ParkingLotReviewDeleteArgs} args - Arguments to delete one ParkingLotReview.
     * @example
     * // Delete one ParkingLotReview
     * const ParkingLotReview = await prisma.parkingLotReview.delete({
     *   where: {
     *     // ... filter to delete one ParkingLotReview
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotReviewDeleteArgs>(args: SelectSubset<T, ParkingLotReviewDeleteArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingLotReview.
     * @param {ParkingLotReviewUpdateArgs} args - Arguments to update one ParkingLotReview.
     * @example
     * // Update one ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotReviewUpdateArgs>(args: SelectSubset<T, ParkingLotReviewUpdateArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingLotReviews.
     * @param {ParkingLotReviewDeleteManyArgs} args - Arguments to filter ParkingLotReviews to delete.
     * @example
     * // Delete a few ParkingLotReviews
     * const { count } = await prisma.parkingLotReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotReviewDeleteManyArgs>(args?: SelectSubset<T, ParkingLotReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLotReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLotReviews
     * const parkingLotReview = await prisma.parkingLotReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotReviewUpdateManyArgs>(args: SelectSubset<T, ParkingLotReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingLotReview.
     * @param {ParkingLotReviewUpsertArgs} args - Arguments to update or create a ParkingLotReview.
     * @example
     * // Update or create a ParkingLotReview
     * const parkingLotReview = await prisma.parkingLotReview.upsert({
     *   create: {
     *     // ... data to create a ParkingLotReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLotReview we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotReviewUpsertArgs>(args: SelectSubset<T, ParkingLotReviewUpsertArgs<ExtArgs>>): Prisma__ParkingLotReviewClient<$Result.GetResult<Prisma.$ParkingLotReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingLotReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewCountArgs} args - Arguments to filter ParkingLotReviews to count.
     * @example
     * // Count the number of ParkingLotReviews
     * const count = await prisma.parkingLotReview.count({
     *   where: {
     *     // ... the filter for the ParkingLotReviews we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotReviewCountArgs>(
      args?: Subset<T, ParkingLotReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLotReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotReviewAggregateArgs>(args: Subset<T, ParkingLotReviewAggregateArgs>): Prisma.PrismaPromise<GetParkingLotReviewAggregateType<T>>

    /**
     * Group by ParkingLotReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotReviewGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLotReview model
   */
  readonly fields: ParkingLotReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLotReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLotReview model
   */ 
  interface ParkingLotReviewFieldRefs {
    readonly id: FieldRef<"ParkingLotReview", 'Int'>
    readonly rating: FieldRef<"ParkingLotReview", 'Int'>
    readonly comment: FieldRef<"ParkingLotReview", 'String'>
    readonly mediaUrls: FieldRef<"ParkingLotReview", 'String[]'>
    readonly createdAt: FieldRef<"ParkingLotReview", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLotReview", 'DateTime'>
    readonly parkingLotId: FieldRef<"ParkingLotReview", 'Int'>
    readonly userId: FieldRef<"ParkingLotReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLotReview findUnique
   */
  export type ParkingLotReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotReview to fetch.
     */
    where: ParkingLotReviewWhereUniqueInput
  }

  /**
   * ParkingLotReview findUniqueOrThrow
   */
  export type ParkingLotReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotReview to fetch.
     */
    where: ParkingLotReviewWhereUniqueInput
  }

  /**
   * ParkingLotReview findFirst
   */
  export type ParkingLotReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotReview to fetch.
     */
    where?: ParkingLotReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotReviews to fetch.
     */
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotReviews.
     */
    cursor?: ParkingLotReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotReviews.
     */
    distinct?: ParkingLotReviewScalarFieldEnum | ParkingLotReviewScalarFieldEnum[]
  }

  /**
   * ParkingLotReview findFirstOrThrow
   */
  export type ParkingLotReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotReview to fetch.
     */
    where?: ParkingLotReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotReviews to fetch.
     */
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotReviews.
     */
    cursor?: ParkingLotReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotReviews.
     */
    distinct?: ParkingLotReviewScalarFieldEnum | ParkingLotReviewScalarFieldEnum[]
  }

  /**
   * ParkingLotReview findMany
   */
  export type ParkingLotReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotReviews to fetch.
     */
    where?: ParkingLotReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotReviews to fetch.
     */
    orderBy?: ParkingLotReviewOrderByWithRelationInput | ParkingLotReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLotReviews.
     */
    cursor?: ParkingLotReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotReviews.
     */
    skip?: number
    distinct?: ParkingLotReviewScalarFieldEnum | ParkingLotReviewScalarFieldEnum[]
  }

  /**
   * ParkingLotReview create
   */
  export type ParkingLotReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLotReview.
     */
    data: XOR<ParkingLotReviewCreateInput, ParkingLotReviewUncheckedCreateInput>
  }

  /**
   * ParkingLotReview createMany
   */
  export type ParkingLotReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLotReviews.
     */
    data: ParkingLotReviewCreateManyInput | ParkingLotReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLotReview createManyAndReturn
   */
  export type ParkingLotReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingLotReviews.
     */
    data: ParkingLotReviewCreateManyInput | ParkingLotReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLotReview update
   */
  export type ParkingLotReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLotReview.
     */
    data: XOR<ParkingLotReviewUpdateInput, ParkingLotReviewUncheckedUpdateInput>
    /**
     * Choose, which ParkingLotReview to update.
     */
    where: ParkingLotReviewWhereUniqueInput
  }

  /**
   * ParkingLotReview updateMany
   */
  export type ParkingLotReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLotReviews.
     */
    data: XOR<ParkingLotReviewUpdateManyMutationInput, ParkingLotReviewUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLotReviews to update
     */
    where?: ParkingLotReviewWhereInput
  }

  /**
   * ParkingLotReview upsert
   */
  export type ParkingLotReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLotReview to update in case it exists.
     */
    where: ParkingLotReviewWhereUniqueInput
    /**
     * In case the ParkingLotReview found by the `where` argument doesn't exist, create a new ParkingLotReview with this data.
     */
    create: XOR<ParkingLotReviewCreateInput, ParkingLotReviewUncheckedCreateInput>
    /**
     * In case the ParkingLotReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotReviewUpdateInput, ParkingLotReviewUncheckedUpdateInput>
  }

  /**
   * ParkingLotReview delete
   */
  export type ParkingLotReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
    /**
     * Filter which ParkingLotReview to delete.
     */
    where: ParkingLotReviewWhereUniqueInput
  }

  /**
   * ParkingLotReview deleteMany
   */
  export type ParkingLotReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotReviews to delete
     */
    where?: ParkingLotReviewWhereInput
  }

  /**
   * ParkingLotReview without action
   */
  export type ParkingLotReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotReview
     */
    select?: ParkingLotReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotReviewInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLotService
   */

  export type AggregateParkingLotService = {
    _count: ParkingLotServiceCountAggregateOutputType | null
    _avg: ParkingLotServiceAvgAggregateOutputType | null
    _sum: ParkingLotServiceSumAggregateOutputType | null
    _min: ParkingLotServiceMinAggregateOutputType | null
    _max: ParkingLotServiceMaxAggregateOutputType | null
  }

  export type ParkingLotServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
    parkingLotId: number | null
  }

  export type ParkingLotServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
  }

  export type ParkingLotServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
  }

  export type ParkingLotServiceCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    mediaUrls: number
    price: number
    vehicleTypes: number
    createdAt: number
    updatedAt: number
    parkingLotId: number
    _all: number
  }


  export type ParkingLotServiceAvgAggregateInputType = {
    id?: true
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotServiceSumAggregateInputType = {
    id?: true
    price?: true
    parkingLotId?: true
  }

  export type ParkingLotServiceMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
  }

  export type ParkingLotServiceMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
  }

  export type ParkingLotServiceCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    mediaUrls?: true
    price?: true
    vehicleTypes?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
    _all?: true
  }

  export type ParkingLotServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotService to aggregate.
     */
    where?: ParkingLotServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotServices to fetch.
     */
    orderBy?: ParkingLotServiceOrderByWithRelationInput | ParkingLotServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLotServices
    **/
    _count?: true | ParkingLotServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotServiceMaxAggregateInputType
  }

  export type GetParkingLotServiceAggregateType<T extends ParkingLotServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLotService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLotService[P]>
      : GetScalarType<T[P], AggregateParkingLotService[P]>
  }




  export type ParkingLotServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotServiceWhereInput
    orderBy?: ParkingLotServiceOrderByWithAggregationInput | ParkingLotServiceOrderByWithAggregationInput[]
    by: ParkingLotServiceScalarFieldEnum[] | ParkingLotServiceScalarFieldEnum
    having?: ParkingLotServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotServiceCountAggregateInputType | true
    _avg?: ParkingLotServiceAvgAggregateInputType
    _sum?: ParkingLotServiceSumAggregateInputType
    _min?: ParkingLotServiceMinAggregateInputType
    _max?: ParkingLotServiceMaxAggregateInputType
  }

  export type ParkingLotServiceGroupByOutputType = {
    id: number
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls: string[]
    price: number
    vehicleTypes: $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt: Date
    updatedAt: Date
    parkingLotId: number
    _count: ParkingLotServiceCountAggregateOutputType | null
    _avg: ParkingLotServiceAvgAggregateOutputType | null
    _sum: ParkingLotServiceSumAggregateOutputType | null
    _min: ParkingLotServiceMinAggregateOutputType | null
    _max: ParkingLotServiceMaxAggregateOutputType | null
  }

  type GetParkingLotServiceGroupByPayload<T extends ParkingLotServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotServiceGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    mediaUrls?: boolean
    price?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotService"]>

  export type ParkingLotServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    mediaUrls?: boolean
    price?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLotService"]>

  export type ParkingLotServiceSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    mediaUrls?: boolean
    price?: boolean
    vehicleTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
  }

  export type ParkingLotServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ParkingLotServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ParkingLotServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLotService"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
      description: string
      mediaUrls: string[]
      price: number
      vehicleTypes: $Enums.VEHICLE__TYPE_ALIAS[]
      createdAt: Date
      updatedAt: Date
      parkingLotId: number
    }, ExtArgs["result"]["parkingLotService"]>
    composites: {}
  }

  type ParkingLotServiceGetPayload<S extends boolean | null | undefined | ParkingLotServiceDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotServicePayload, S>

  type ParkingLotServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingLotServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingLotServiceCountAggregateInputType | true
    }

  export interface ParkingLotServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLotService'], meta: { name: 'ParkingLotService' } }
    /**
     * Find zero or one ParkingLotService that matches the filter.
     * @param {ParkingLotServiceFindUniqueArgs} args - Arguments to find a ParkingLotService
     * @example
     * // Get one ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotServiceFindUniqueArgs>(args: SelectSubset<T, ParkingLotServiceFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingLotService that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingLotServiceFindUniqueOrThrowArgs} args - Arguments to find a ParkingLotService
     * @example
     * // Get one ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingLotService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceFindFirstArgs} args - Arguments to find a ParkingLotService
     * @example
     * // Get one ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotServiceFindFirstArgs>(args?: SelectSubset<T, ParkingLotServiceFindFirstArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingLotService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceFindFirstOrThrowArgs} args - Arguments to find a ParkingLotService
     * @example
     * // Get one ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingLotServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLotServices
     * const parkingLotServices = await prisma.parkingLotService.findMany()
     * 
     * // Get first 10 ParkingLotServices
     * const parkingLotServices = await prisma.parkingLotService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingLotServiceWithIdOnly = await prisma.parkingLotService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingLotServiceFindManyArgs>(args?: SelectSubset<T, ParkingLotServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingLotService.
     * @param {ParkingLotServiceCreateArgs} args - Arguments to create a ParkingLotService.
     * @example
     * // Create one ParkingLotService
     * const ParkingLotService = await prisma.parkingLotService.create({
     *   data: {
     *     // ... data to create a ParkingLotService
     *   }
     * })
     * 
     */
    create<T extends ParkingLotServiceCreateArgs>(args: SelectSubset<T, ParkingLotServiceCreateArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingLotServices.
     * @param {ParkingLotServiceCreateManyArgs} args - Arguments to create many ParkingLotServices.
     * @example
     * // Create many ParkingLotServices
     * const parkingLotService = await prisma.parkingLotService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotServiceCreateManyArgs>(args?: SelectSubset<T, ParkingLotServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLotServices and returns the data saved in the database.
     * @param {ParkingLotServiceCreateManyAndReturnArgs} args - Arguments to create many ParkingLotServices.
     * @example
     * // Create many ParkingLotServices
     * const parkingLotService = await prisma.parkingLotService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLotServices and only return the `id`
     * const parkingLotServiceWithIdOnly = await prisma.parkingLotService.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingLotService.
     * @param {ParkingLotServiceDeleteArgs} args - Arguments to delete one ParkingLotService.
     * @example
     * // Delete one ParkingLotService
     * const ParkingLotService = await prisma.parkingLotService.delete({
     *   where: {
     *     // ... filter to delete one ParkingLotService
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotServiceDeleteArgs>(args: SelectSubset<T, ParkingLotServiceDeleteArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingLotService.
     * @param {ParkingLotServiceUpdateArgs} args - Arguments to update one ParkingLotService.
     * @example
     * // Update one ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotServiceUpdateArgs>(args: SelectSubset<T, ParkingLotServiceUpdateArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingLotServices.
     * @param {ParkingLotServiceDeleteManyArgs} args - Arguments to filter ParkingLotServices to delete.
     * @example
     * // Delete a few ParkingLotServices
     * const { count } = await prisma.parkingLotService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotServiceDeleteManyArgs>(args?: SelectSubset<T, ParkingLotServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLotServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLotServices
     * const parkingLotService = await prisma.parkingLotService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotServiceUpdateManyArgs>(args: SelectSubset<T, ParkingLotServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingLotService.
     * @param {ParkingLotServiceUpsertArgs} args - Arguments to update or create a ParkingLotService.
     * @example
     * // Update or create a ParkingLotService
     * const parkingLotService = await prisma.parkingLotService.upsert({
     *   create: {
     *     // ... data to create a ParkingLotService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLotService we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotServiceUpsertArgs>(args: SelectSubset<T, ParkingLotServiceUpsertArgs<ExtArgs>>): Prisma__ParkingLotServiceClient<$Result.GetResult<Prisma.$ParkingLotServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingLotServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceCountArgs} args - Arguments to filter ParkingLotServices to count.
     * @example
     * // Count the number of ParkingLotServices
     * const count = await prisma.parkingLotService.count({
     *   where: {
     *     // ... the filter for the ParkingLotServices we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotServiceCountArgs>(
      args?: Subset<T, ParkingLotServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLotService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotServiceAggregateArgs>(args: Subset<T, ParkingLotServiceAggregateArgs>): Prisma.PrismaPromise<GetParkingLotServiceAggregateType<T>>

    /**
     * Group by ParkingLotService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotServiceGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLotService model
   */
  readonly fields: ParkingLotServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLotService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLotService model
   */ 
  interface ParkingLotServiceFieldRefs {
    readonly id: FieldRef<"ParkingLotService", 'Int'>
    readonly name: FieldRef<"ParkingLotService", 'String'>
    readonly type: FieldRef<"ParkingLotService", 'PARKING_LOT_SERVICE__TYPE_ALIAS'>
    readonly description: FieldRef<"ParkingLotService", 'String'>
    readonly mediaUrls: FieldRef<"ParkingLotService", 'String[]'>
    readonly price: FieldRef<"ParkingLotService", 'Float'>
    readonly vehicleTypes: FieldRef<"ParkingLotService", 'VEHICLE__TYPE_ALIAS[]'>
    readonly createdAt: FieldRef<"ParkingLotService", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLotService", 'DateTime'>
    readonly parkingLotId: FieldRef<"ParkingLotService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLotService findUnique
   */
  export type ParkingLotServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotService to fetch.
     */
    where: ParkingLotServiceWhereUniqueInput
  }

  /**
   * ParkingLotService findUniqueOrThrow
   */
  export type ParkingLotServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotService to fetch.
     */
    where: ParkingLotServiceWhereUniqueInput
  }

  /**
   * ParkingLotService findFirst
   */
  export type ParkingLotServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotService to fetch.
     */
    where?: ParkingLotServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotServices to fetch.
     */
    orderBy?: ParkingLotServiceOrderByWithRelationInput | ParkingLotServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotServices.
     */
    cursor?: ParkingLotServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotServices.
     */
    distinct?: ParkingLotServiceScalarFieldEnum | ParkingLotServiceScalarFieldEnum[]
  }

  /**
   * ParkingLotService findFirstOrThrow
   */
  export type ParkingLotServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotService to fetch.
     */
    where?: ParkingLotServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotServices to fetch.
     */
    orderBy?: ParkingLotServiceOrderByWithRelationInput | ParkingLotServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLotServices.
     */
    cursor?: ParkingLotServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLotServices.
     */
    distinct?: ParkingLotServiceScalarFieldEnum | ParkingLotServiceScalarFieldEnum[]
  }

  /**
   * ParkingLotService findMany
   */
  export type ParkingLotServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLotServices to fetch.
     */
    where?: ParkingLotServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLotServices to fetch.
     */
    orderBy?: ParkingLotServiceOrderByWithRelationInput | ParkingLotServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLotServices.
     */
    cursor?: ParkingLotServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLotServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLotServices.
     */
    skip?: number
    distinct?: ParkingLotServiceScalarFieldEnum | ParkingLotServiceScalarFieldEnum[]
  }

  /**
   * ParkingLotService create
   */
  export type ParkingLotServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLotService.
     */
    data: XOR<ParkingLotServiceCreateInput, ParkingLotServiceUncheckedCreateInput>
  }

  /**
   * ParkingLotService createMany
   */
  export type ParkingLotServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLotServices.
     */
    data: ParkingLotServiceCreateManyInput | ParkingLotServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLotService createManyAndReturn
   */
  export type ParkingLotServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingLotServices.
     */
    data: ParkingLotServiceCreateManyInput | ParkingLotServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingLotService update
   */
  export type ParkingLotServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLotService.
     */
    data: XOR<ParkingLotServiceUpdateInput, ParkingLotServiceUncheckedUpdateInput>
    /**
     * Choose, which ParkingLotService to update.
     */
    where: ParkingLotServiceWhereUniqueInput
  }

  /**
   * ParkingLotService updateMany
   */
  export type ParkingLotServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLotServices.
     */
    data: XOR<ParkingLotServiceUpdateManyMutationInput, ParkingLotServiceUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLotServices to update
     */
    where?: ParkingLotServiceWhereInput
  }

  /**
   * ParkingLotService upsert
   */
  export type ParkingLotServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLotService to update in case it exists.
     */
    where: ParkingLotServiceWhereUniqueInput
    /**
     * In case the ParkingLotService found by the `where` argument doesn't exist, create a new ParkingLotService with this data.
     */
    create: XOR<ParkingLotServiceCreateInput, ParkingLotServiceUncheckedCreateInput>
    /**
     * In case the ParkingLotService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotServiceUpdateInput, ParkingLotServiceUncheckedUpdateInput>
  }

  /**
   * ParkingLotService delete
   */
  export type ParkingLotServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
    /**
     * Filter which ParkingLotService to delete.
     */
    where: ParkingLotServiceWhereUniqueInput
  }

  /**
   * ParkingLotService deleteMany
   */
  export type ParkingLotServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLotServices to delete
     */
    where?: ParkingLotServiceWhereInput
  }

  /**
   * ParkingLotService without action
   */
  export type ParkingLotServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotService
     */
    select?: ParkingLotServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotServiceInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSpot
   */

  export type AggregateParkingSpot = {
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  export type ParkingSpotAvgAggregateOutputType = {
    id: number | null
    parkingLotId: number | null
  }

  export type ParkingSpotSumAggregateOutputType = {
    id: number | null
    parkingLotId: number | null
  }

  export type ParkingSpotMinAggregateOutputType = {
    id: number | null
    name: string | null
    isAvailable: boolean | null
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
  }

  export type ParkingSpotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isAvailable: boolean | null
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingLotId: number | null
  }

  export type ParkingSpotCountAggregateOutputType = {
    id: number
    name: number
    isAvailable: number
    vehicleType: number
    createdAt: number
    updatedAt: number
    parkingLotId: number
    _all: number
  }


  export type ParkingSpotAvgAggregateInputType = {
    id?: true
    parkingLotId?: true
  }

  export type ParkingSpotSumAggregateInputType = {
    id?: true
    parkingLotId?: true
  }

  export type ParkingSpotMinAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    vehicleType?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
  }

  export type ParkingSpotMaxAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    vehicleType?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
  }

  export type ParkingSpotCountAggregateInputType = {
    id?: true
    name?: true
    isAvailable?: true
    vehicleType?: true
    createdAt?: true
    updatedAt?: true
    parkingLotId?: true
    _all?: true
  }

  export type ParkingSpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpot to aggregate.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSpots
    **/
    _count?: true | ParkingSpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type GetParkingSpotAggregateType<T extends ParkingSpotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSpot[P]>
      : GetScalarType<T[P], AggregateParkingSpot[P]>
  }




  export type ParkingSpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithAggregationInput | ParkingSpotOrderByWithAggregationInput[]
    by: ParkingSpotScalarFieldEnum[] | ParkingSpotScalarFieldEnum
    having?: ParkingSpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSpotCountAggregateInputType | true
    _avg?: ParkingSpotAvgAggregateInputType
    _sum?: ParkingSpotSumAggregateInputType
    _min?: ParkingSpotMinAggregateInputType
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type ParkingSpotGroupByOutputType = {
    id: number
    name: string
    isAvailable: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt: Date
    updatedAt: Date
    parkingLotId: number
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  type GetParkingSpotGroupByPayload<T extends ParkingSpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    vehicleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    reservations?: boolean | ParkingSpot$reservationsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSpot$parkingRecordsArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    _count?: boolean | ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    vehicleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectScalar = {
    id?: boolean
    name?: boolean
    isAvailable?: boolean
    vehicleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotId?: boolean
  }

  export type ParkingSpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ParkingSpot$reservationsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSpot$parkingRecordsArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    _count?: boolean | ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSpotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ParkingSpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSpot"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isAvailable: boolean
      vehicleType: $Enums.VEHICLE__TYPE_ALIAS
      createdAt: Date
      updatedAt: Date
      parkingLotId: number
    }, ExtArgs["result"]["parkingSpot"]>
    composites: {}
  }

  type ParkingSpotGetPayload<S extends boolean | null | undefined | ParkingSpotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSpotPayload, S>

  type ParkingSpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingSpotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingSpotCountAggregateInputType | true
    }

  export interface ParkingSpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpot'], meta: { name: 'ParkingSpot' } }
    /**
     * Find zero or one ParkingSpot that matches the filter.
     * @param {ParkingSpotFindUniqueArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSpotFindUniqueArgs>(args: SelectSubset<T, ParkingSpotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingSpot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingSpotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSpotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingSpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSpotFindFirstArgs>(args?: SelectSubset<T, ParkingSpotFindFirstArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingSpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSpotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingSpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany()
     * 
     * // Get first 10 ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSpotFindManyArgs>(args?: SelectSubset<T, ParkingSpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingSpot.
     * @param {ParkingSpotCreateArgs} args - Arguments to create a ParkingSpot.
     * @example
     * // Create one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.create({
     *   data: {
     *     // ... data to create a ParkingSpot
     *   }
     * })
     * 
     */
    create<T extends ParkingSpotCreateArgs>(args: SelectSubset<T, ParkingSpotCreateArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingSpots.
     * @param {ParkingSpotCreateManyArgs} args - Arguments to create many ParkingSpots.
     * @example
     * // Create many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSpotCreateManyArgs>(args?: SelectSubset<T, ParkingSpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSpots and returns the data saved in the database.
     * @param {ParkingSpotCreateManyAndReturnArgs} args - Arguments to create many ParkingSpots.
     * @example
     * // Create many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSpots and only return the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSpotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSpotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingSpot.
     * @param {ParkingSpotDeleteArgs} args - Arguments to delete one ParkingSpot.
     * @example
     * // Delete one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSpot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSpotDeleteArgs>(args: SelectSubset<T, ParkingSpotDeleteArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingSpot.
     * @param {ParkingSpotUpdateArgs} args - Arguments to update one ParkingSpot.
     * @example
     * // Update one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSpotUpdateArgs>(args: SelectSubset<T, ParkingSpotUpdateArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingSpots.
     * @param {ParkingSpotDeleteManyArgs} args - Arguments to filter ParkingSpots to delete.
     * @example
     * // Delete a few ParkingSpots
     * const { count } = await prisma.parkingSpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSpotDeleteManyArgs>(args?: SelectSubset<T, ParkingSpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSpotUpdateManyArgs>(args: SelectSubset<T, ParkingSpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingSpot.
     * @param {ParkingSpotUpsertArgs} args - Arguments to update or create a ParkingSpot.
     * @example
     * // Update or create a ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.upsert({
     *   create: {
     *     // ... data to create a ParkingSpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSpot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSpotUpsertArgs>(args: SelectSubset<T, ParkingSpotUpsertArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotCountArgs} args - Arguments to filter ParkingSpots to count.
     * @example
     * // Count the number of ParkingSpots
     * const count = await prisma.parkingSpot.count({
     *   where: {
     *     // ... the filter for the ParkingSpots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSpotCountArgs>(
      args?: Subset<T, ParkingSpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSpotAggregateArgs>(args: Subset<T, ParkingSpotAggregateArgs>): Prisma.PrismaPromise<GetParkingSpotAggregateType<T>>

    /**
     * Group by ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSpotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSpotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSpot model
   */
  readonly fields: ParkingSpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends ParkingSpot$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    parkingRecords<T extends ParkingSpot$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany"> | Null>
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingSpot model
   */ 
  interface ParkingSpotFieldRefs {
    readonly id: FieldRef<"ParkingSpot", 'Int'>
    readonly name: FieldRef<"ParkingSpot", 'String'>
    readonly isAvailable: FieldRef<"ParkingSpot", 'Boolean'>
    readonly vehicleType: FieldRef<"ParkingSpot", 'VEHICLE__TYPE_ALIAS'>
    readonly createdAt: FieldRef<"ParkingSpot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSpot", 'DateTime'>
    readonly parkingLotId: FieldRef<"ParkingSpot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSpot findUnique
   */
  export type ParkingSpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot findUniqueOrThrow
   */
  export type ParkingSpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot findFirst
   */
  export type ParkingSpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot findFirstOrThrow
   */
  export type ParkingSpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot findMany
   */
  export type ParkingSpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpots to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot create
   */
  export type ParkingSpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSpot.
     */
    data: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
  }

  /**
   * ParkingSpot createMany
   */
  export type ParkingSpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSpots.
     */
    data: ParkingSpotCreateManyInput | ParkingSpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSpot createManyAndReturn
   */
  export type ParkingSpotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingSpots.
     */
    data: ParkingSpotCreateManyInput | ParkingSpotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpot update
   */
  export type ParkingSpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSpot.
     */
    data: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSpot to update.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot updateMany
   */
  export type ParkingSpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSpots.
     */
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpots to update
     */
    where?: ParkingSpotWhereInput
  }

  /**
   * ParkingSpot upsert
   */
  export type ParkingSpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSpot to update in case it exists.
     */
    where: ParkingSpotWhereUniqueInput
    /**
     * In case the ParkingSpot found by the `where` argument doesn't exist, create a new ParkingSpot with this data.
     */
    create: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
    /**
     * In case the ParkingSpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
  }

  /**
   * ParkingSpot delete
   */
  export type ParkingSpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSpot to delete.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot deleteMany
   */
  export type ParkingSpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpots to delete
     */
    where?: ParkingSpotWhereInput
  }

  /**
   * ParkingSpot.reservations
   */
  export type ParkingSpot$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * ParkingSpot.parkingRecords
   */
  export type ParkingSpot$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingSpot without action
   */
  export type ParkingSpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    parkingSpotId: number | null
    vehicleId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    parkingSpotId: number | null
    vehicleId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    checkInAt: Date | null
    status: $Enums.RESERVATION__STATUS_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingSpotId: number | null
    vehicleId: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    checkInAt: Date | null
    status: $Enums.RESERVATION__STATUS_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingSpotId: number | null
    vehicleId: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    checkInAt: number
    status: number
    createdAt: number
    updatedAt: number
    parkingSpotId: number
    vehicleId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    parkingSpotId?: true
    vehicleId?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    parkingSpotId?: true
    vehicleId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    checkInAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingSpotId?: true
    vehicleId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    checkInAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingSpotId?: true
    vehicleId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    checkInAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingSpotId?: true
    vehicleId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    checkInAt: Date
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt: Date
    updatedAt: Date
    parkingSpotId: number
    vehicleId: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSpotId?: boolean
    vehicleId?: boolean
    parkingRecord?: boolean | Reservation$parkingRecordArgs<ExtArgs>
    parkingSpot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSpotId?: boolean
    vehicleId?: boolean
    parkingSpot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    checkInAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingSpotId?: boolean
    vehicleId?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingRecord?: boolean | Reservation$parkingRecordArgs<ExtArgs>
    parkingSpot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSpot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      parkingRecord: Prisma.$ParkingRecordPayload<ExtArgs> | null
      parkingSpot: Prisma.$ParkingSpotPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkInAt: Date
      status: $Enums.RESERVATION__STATUS_ALIAS
      createdAt: Date
      updatedAt: Date
      parkingSpotId: number
      vehicleId: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingRecord<T extends Reservation$parkingRecordArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$parkingRecordArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    parkingSpot<T extends ParkingSpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpotDefaultArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly checkInAt: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'RESERVATION__STATUS_ALIAS'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly parkingSpotId: FieldRef<"Reservation", 'Int'>
    readonly vehicleId: FieldRef<"Reservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation.parkingRecord
   */
  export type Reservation$parkingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ParkingRecord
   */

  export type AggregateParkingRecord = {
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  export type ParkingRecordAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    vehicleId: number | null
    parkingSpotId: number | null
    reservationId: number | null
  }

  export type ParkingRecordSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    vehicleId: number | null
    parkingSpotId: number | null
    reservationId: number | null
  }

  export type ParkingRecordMinAggregateOutputType = {
    id: number | null
    checkInAt: Date | null
    checkOutAt: Date | null
    totalPrice: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: number | null
    parkingSpotId: number | null
    reservationId: number | null
  }

  export type ParkingRecordMaxAggregateOutputType = {
    id: number | null
    checkInAt: Date | null
    checkOutAt: Date | null
    totalPrice: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicleId: number | null
    parkingSpotId: number | null
    reservationId: number | null
  }

  export type ParkingRecordCountAggregateOutputType = {
    id: number
    checkInAt: number
    checkOutAt: number
    totalPrice: number
    status: number
    createdAt: number
    updatedAt: number
    vehicleId: number
    parkingSpotId: number
    reservationId: number
    _all: number
  }


  export type ParkingRecordAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    vehicleId?: true
    parkingSpotId?: true
    reservationId?: true
  }

  export type ParkingRecordSumAggregateInputType = {
    id?: true
    totalPrice?: true
    vehicleId?: true
    parkingSpotId?: true
    reservationId?: true
  }

  export type ParkingRecordMinAggregateInputType = {
    id?: true
    checkInAt?: true
    checkOutAt?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    parkingSpotId?: true
    reservationId?: true
  }

  export type ParkingRecordMaxAggregateInputType = {
    id?: true
    checkInAt?: true
    checkOutAt?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    parkingSpotId?: true
    reservationId?: true
  }

  export type ParkingRecordCountAggregateInputType = {
    id?: true
    checkInAt?: true
    checkOutAt?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    vehicleId?: true
    parkingSpotId?: true
    reservationId?: true
    _all?: true
  }

  export type ParkingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecord to aggregate.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingRecords
    **/
    _count?: true | ParkingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type GetParkingRecordAggregateType<T extends ParkingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingRecord[P]>
      : GetScalarType<T[P], AggregateParkingRecord[P]>
  }




  export type ParkingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithAggregationInput | ParkingRecordOrderByWithAggregationInput[]
    by: ParkingRecordScalarFieldEnum[] | ParkingRecordScalarFieldEnum
    having?: ParkingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingRecordCountAggregateInputType | true
    _avg?: ParkingRecordAvgAggregateInputType
    _sum?: ParkingRecordSumAggregateInputType
    _min?: ParkingRecordMinAggregateInputType
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type ParkingRecordGroupByOutputType = {
    id: number
    checkInAt: Date
    checkOutAt: Date | null
    totalPrice: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt: Date
    updatedAt: Date
    vehicleId: number | null
    parkingSpotId: number | null
    reservationId: number | null
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  type GetParkingRecordGroupByPayload<T extends ParkingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
        }
      >
    >


  export type ParkingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    parkingSpotId?: boolean
    reservationId?: boolean
    vehicle?: boolean | ParkingRecord$vehicleArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
    reservation?: boolean | ParkingRecord$reservationArgs<ExtArgs>
    paymentRecord?: boolean | ParkingRecord$paymentRecordArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    parkingSpotId?: boolean
    reservationId?: boolean
    vehicle?: boolean | ParkingRecord$vehicleArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
    reservation?: boolean | ParkingRecord$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectScalar = {
    id?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleId?: boolean
    parkingSpotId?: boolean
    reservationId?: boolean
  }

  export type ParkingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | ParkingRecord$vehicleArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
    reservation?: boolean | ParkingRecord$reservationArgs<ExtArgs>
    paymentRecord?: boolean | ParkingRecord$paymentRecordArgs<ExtArgs>
  }
  export type ParkingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | ParkingRecord$vehicleArgs<ExtArgs>
    parkingSpot?: boolean | ParkingRecord$parkingSpotArgs<ExtArgs>
    reservation?: boolean | ParkingRecord$reservationArgs<ExtArgs>
  }

  export type $ParkingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingRecord"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      parkingSpot: Prisma.$ParkingSpotPayload<ExtArgs> | null
      reservation: Prisma.$ReservationPayload<ExtArgs> | null
      paymentRecord: Prisma.$PaymentRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkInAt: Date
      checkOutAt: Date | null
      totalPrice: number | null
      status: $Enums.PARKING_RECORD__STATUS_ALIAS
      createdAt: Date
      updatedAt: Date
      vehicleId: number | null
      parkingSpotId: number | null
      reservationId: number | null
    }, ExtArgs["result"]["parkingRecord"]>
    composites: {}
  }

  type ParkingRecordGetPayload<S extends boolean | null | undefined | ParkingRecordDefaultArgs> = $Result.GetResult<Prisma.$ParkingRecordPayload, S>

  type ParkingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParkingRecordCountAggregateInputType | true
    }

  export interface ParkingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingRecord'], meta: { name: 'ParkingRecord' } }
    /**
     * Find zero or one ParkingRecord that matches the filter.
     * @param {ParkingRecordFindUniqueArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingRecordFindUniqueArgs>(args: SelectSubset<T, ParkingRecordFindUniqueArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ParkingRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParkingRecordFindUniqueOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ParkingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingRecordFindFirstArgs>(args?: SelectSubset<T, ParkingRecordFindFirstArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ParkingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ParkingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany()
     * 
     * // Get first 10 ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingRecordFindManyArgs>(args?: SelectSubset<T, ParkingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ParkingRecord.
     * @param {ParkingRecordCreateArgs} args - Arguments to create a ParkingRecord.
     * @example
     * // Create one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.create({
     *   data: {
     *     // ... data to create a ParkingRecord
     *   }
     * })
     * 
     */
    create<T extends ParkingRecordCreateArgs>(args: SelectSubset<T, ParkingRecordCreateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ParkingRecords.
     * @param {ParkingRecordCreateManyArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingRecordCreateManyArgs>(args?: SelectSubset<T, ParkingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingRecords and returns the data saved in the database.
     * @param {ParkingRecordCreateManyAndReturnArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingRecords and only return the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ParkingRecord.
     * @param {ParkingRecordDeleteArgs} args - Arguments to delete one ParkingRecord.
     * @example
     * // Delete one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.delete({
     *   where: {
     *     // ... filter to delete one ParkingRecord
     *   }
     * })
     * 
     */
    delete<T extends ParkingRecordDeleteArgs>(args: SelectSubset<T, ParkingRecordDeleteArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ParkingRecord.
     * @param {ParkingRecordUpdateArgs} args - Arguments to update one ParkingRecord.
     * @example
     * // Update one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingRecordUpdateArgs>(args: SelectSubset<T, ParkingRecordUpdateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ParkingRecords.
     * @param {ParkingRecordDeleteManyArgs} args - Arguments to filter ParkingRecords to delete.
     * @example
     * // Delete a few ParkingRecords
     * const { count } = await prisma.parkingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingRecordDeleteManyArgs>(args?: SelectSubset<T, ParkingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingRecordUpdateManyArgs>(args: SelectSubset<T, ParkingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingRecord.
     * @param {ParkingRecordUpsertArgs} args - Arguments to update or create a ParkingRecord.
     * @example
     * // Update or create a ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.upsert({
     *   create: {
     *     // ... data to create a ParkingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingRecord we want to update
     *   }
     * })
     */
    upsert<T extends ParkingRecordUpsertArgs>(args: SelectSubset<T, ParkingRecordUpsertArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordCountArgs} args - Arguments to filter ParkingRecords to count.
     * @example
     * // Count the number of ParkingRecords
     * const count = await prisma.parkingRecord.count({
     *   where: {
     *     // ... the filter for the ParkingRecords we want to count
     *   }
     * })
    **/
    count<T extends ParkingRecordCountArgs>(
      args?: Subset<T, ParkingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingRecordAggregateArgs>(args: Subset<T, ParkingRecordAggregateArgs>): Prisma.PrismaPromise<GetParkingRecordAggregateType<T>>

    /**
     * Group by ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingRecordGroupByArgs['orderBy'] }
        : { orderBy?: ParkingRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingRecord model
   */
  readonly fields: ParkingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends ParkingRecord$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    parkingSpot<T extends ParkingRecord$parkingSpotArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$parkingSpotArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reservation<T extends ParkingRecord$reservationArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$reservationArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    paymentRecord<T extends ParkingRecord$paymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$paymentRecordArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingRecord model
   */ 
  interface ParkingRecordFieldRefs {
    readonly id: FieldRef<"ParkingRecord", 'Int'>
    readonly checkInAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly checkOutAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly totalPrice: FieldRef<"ParkingRecord", 'Float'>
    readonly status: FieldRef<"ParkingRecord", 'PARKING_RECORD__STATUS_ALIAS'>
    readonly createdAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly vehicleId: FieldRef<"ParkingRecord", 'Int'>
    readonly parkingSpotId: FieldRef<"ParkingRecord", 'Int'>
    readonly reservationId: FieldRef<"ParkingRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParkingRecord findUnique
   */
  export type ParkingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findUniqueOrThrow
   */
  export type ParkingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findFirst
   */
  export type ParkingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findFirstOrThrow
   */
  export type ParkingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findMany
   */
  export type ParkingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecords to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord create
   */
  export type ParkingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingRecord.
     */
    data: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
  }

  /**
   * ParkingRecord createMany
   */
  export type ParkingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingRecord createManyAndReturn
   */
  export type ParkingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingRecord update
   */
  export type ParkingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingRecord.
     */
    data: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
    /**
     * Choose, which ParkingRecord to update.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord updateMany
   */
  export type ParkingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingRecords.
     */
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ParkingRecords to update
     */
    where?: ParkingRecordWhereInput
  }

  /**
   * ParkingRecord upsert
   */
  export type ParkingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingRecord to update in case it exists.
     */
    where: ParkingRecordWhereUniqueInput
    /**
     * In case the ParkingRecord found by the `where` argument doesn't exist, create a new ParkingRecord with this data.
     */
    create: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
    /**
     * In case the ParkingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
  }

  /**
   * ParkingRecord delete
   */
  export type ParkingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter which ParkingRecord to delete.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord deleteMany
   */
  export type ParkingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecords to delete
     */
    where?: ParkingRecordWhereInput
  }

  /**
   * ParkingRecord.vehicle
   */
  export type ParkingRecord$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * ParkingRecord.parkingSpot
   */
  export type ParkingRecord$parkingSpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
  }

  /**
   * ParkingRecord.reservation
   */
  export type ParkingRecord$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
  }

  /**
   * ParkingRecord.paymentRecord
   */
  export type ParkingRecord$paymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
  }

  /**
   * ParkingRecord without action
   */
  export type ParkingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    parkingRecordId: number | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    parkingRecordId: number | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: number | null
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    parkingRecordId: number | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: number | null
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    parkingRecordId: number | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    method: number
    amount: number
    createdAt: number
    updatedAt: number
    userId: number
    parkingRecordId: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    parkingRecordId?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    parkingRecordId?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parkingRecordId?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parkingRecordId?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parkingRecordId?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt: Date
    updatedAt: Date
    userId: number
    parkingRecordId: number
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parkingRecordId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingRecord?: boolean | ParkingRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parkingRecordId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingRecord?: boolean | ParkingRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectScalar = {
    id?: boolean
    method?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parkingRecordId?: boolean
  }

  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingRecord?: boolean | ParkingRecordDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingRecord?: boolean | ParkingRecordDefaultArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parkingRecord: Prisma.$ParkingRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
      amount: number
      createdAt: Date
      updatedAt: Date
      userId: number
      parkingRecordId: number
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRecords and returns the data saved in the database.
     * @param {PaymentRecordCreateManyAndReturnArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parkingRecord<T extends ParkingRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecordDefaultArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentRecord model
   */ 
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'Int'>
    readonly method: FieldRef<"PaymentRecord", 'PAYMENT_RECORD__METHOD_ALIAS'>
    readonly amount: FieldRef<"PaymentRecord", 'Float'>
    readonly createdAt: FieldRef<"PaymentRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentRecord", 'DateTime'>
    readonly userId: FieldRef<"PaymentRecord", 'Int'>
    readonly parkingRecordId: FieldRef<"PaymentRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord createManyAndReturn
   */
  export type PaymentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId'
  };

  export type AccountTokenScalarFieldEnum = (typeof AccountTokenScalarFieldEnum)[keyof typeof AccountTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserNotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type UserNotificationScalarFieldEnum = (typeof UserNotificationScalarFieldEnum)[keyof typeof UserNotificationScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
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

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ParkingLotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    mediaUrls: 'mediaUrls',
    ratings: 'ratings',
    phone: 'phone',
    openAt: 'openAt',
    closeAt: 'closeAt',
    status: 'status',
    isApproved: 'isApproved',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ParkingLotScalarFieldEnum = (typeof ParkingLotScalarFieldEnum)[keyof typeof ParkingLotScalarFieldEnum]


  export const ParkingLotPriceScalarFieldEnum: {
    vehicleType: 'vehicleType',
    price: 'price',
    parkingLotId: 'parkingLotId'
  };

  export type ParkingLotPriceScalarFieldEnum = (typeof ParkingLotPriceScalarFieldEnum)[keyof typeof ParkingLotPriceScalarFieldEnum]


  export const ParkingLotReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    mediaUrls: 'mediaUrls',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parkingLotId: 'parkingLotId',
    userId: 'userId'
  };

  export type ParkingLotReviewScalarFieldEnum = (typeof ParkingLotReviewScalarFieldEnum)[keyof typeof ParkingLotReviewScalarFieldEnum]


  export const ParkingLotServiceScalarFieldEnum: {
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

  export type ParkingLotServiceScalarFieldEnum = (typeof ParkingLotServiceScalarFieldEnum)[keyof typeof ParkingLotServiceScalarFieldEnum]


  export const ParkingSpotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isAvailable: 'isAvailable',
    vehicleType: 'vehicleType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parkingLotId: 'parkingLotId'
  };

  export type ParkingSpotScalarFieldEnum = (typeof ParkingSpotScalarFieldEnum)[keyof typeof ParkingSpotScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    checkInAt: 'checkInAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parkingSpotId: 'parkingSpotId',
    vehicleId: 'vehicleId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ParkingRecordScalarFieldEnum: {
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

  export type ParkingRecordScalarFieldEnum = (typeof ParkingRecordScalarFieldEnum)[keyof typeof ParkingRecordScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    method: 'method',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    parkingRecordId: 'parkingRecordId'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ACCOUNT__ROLE_ALIAS'
   */
  export type EnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ACCOUNT__ROLE_ALIAS'>
    


  /**
   * Reference to a field of type 'ACCOUNT__ROLE_ALIAS[]'
   */
  export type ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ACCOUNT__ROLE_ALIAS[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'USER__GENDER_ALIAS'
   */
  export type EnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER__GENDER_ALIAS'>
    


  /**
   * Reference to a field of type 'USER__GENDER_ALIAS[]'
   */
  export type ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER__GENDER_ALIAS[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VEHICLE__TYPE_ALIAS'
   */
  export type EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VEHICLE__TYPE_ALIAS'>
    


  /**
   * Reference to a field of type 'VEHICLE__TYPE_ALIAS[]'
   */
  export type ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VEHICLE__TYPE_ALIAS[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PARKING_LOT__STATUS_ALIAS'
   */
  export type EnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_LOT__STATUS_ALIAS'>
    


  /**
   * Reference to a field of type 'PARKING_LOT__STATUS_ALIAS[]'
   */
  export type ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_LOT__STATUS_ALIAS[]'>
    


  /**
   * Reference to a field of type 'PARKING_LOT_SERVICE__TYPE_ALIAS'
   */
  export type EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_LOT_SERVICE__TYPE_ALIAS'>
    


  /**
   * Reference to a field of type 'PARKING_LOT_SERVICE__TYPE_ALIAS[]'
   */
  export type ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_LOT_SERVICE__TYPE_ALIAS[]'>
    


  /**
   * Reference to a field of type 'RESERVATION__STATUS_ALIAS'
   */
  export type EnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RESERVATION__STATUS_ALIAS'>
    


  /**
   * Reference to a field of type 'RESERVATION__STATUS_ALIAS[]'
   */
  export type ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RESERVATION__STATUS_ALIAS[]'>
    


  /**
   * Reference to a field of type 'PARKING_RECORD__STATUS_ALIAS'
   */
  export type EnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_RECORD__STATUS_ALIAS'>
    


  /**
   * Reference to a field of type 'PARKING_RECORD__STATUS_ALIAS[]'
   */
  export type ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PARKING_RECORD__STATUS_ALIAS[]'>
    


  /**
   * Reference to a field of type 'PAYMENT_RECORD__METHOD_ALIAS'
   */
  export type EnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_RECORD__METHOD_ALIAS'>
    


  /**
   * Reference to a field of type 'PAYMENT_RECORD__METHOD_ALIAS[]'
   */
  export type ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_RECORD__METHOD_ALIAS[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    role?: EnumACCOUNT__ROLE_ALIASFilter<"Account"> | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    AccountToken?: AccountTokenListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    AccountToken?: AccountTokenOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    role?: EnumACCOUNT__ROLE_ALIASFilter<"Account"> | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    AccountToken?: AccountTokenListRelationFilter
  }, "id" | "email">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    role?: EnumACCOUNT__ROLE_ALIASWithAggregatesFilter<"Account"> | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountTokenWhereInput = {
    AND?: AccountTokenWhereInput | AccountTokenWhereInput[]
    OR?: AccountTokenWhereInput[]
    NOT?: AccountTokenWhereInput | AccountTokenWhereInput[]
    id?: IntFilter<"AccountToken"> | number
    token?: StringFilter<"AccountToken"> | string
    createdAt?: DateTimeFilter<"AccountToken"> | Date | string
    updatedAt?: DateTimeFilter<"AccountToken"> | Date | string
    accountId?: StringFilter<"AccountToken"> | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type AccountTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type AccountTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountTokenWhereInput | AccountTokenWhereInput[]
    OR?: AccountTokenWhereInput[]
    NOT?: AccountTokenWhereInput | AccountTokenWhereInput[]
    token?: StringFilter<"AccountToken"> | string
    createdAt?: DateTimeFilter<"AccountToken"> | Date | string
    updatedAt?: DateTimeFilter<"AccountToken"> | Date | string
    accountId?: StringFilter<"AccountToken"> | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id">

  export type AccountTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    _count?: AccountTokenCountOrderByAggregateInput
    _avg?: AccountTokenAvgOrderByAggregateInput
    _max?: AccountTokenMaxOrderByAggregateInput
    _min?: AccountTokenMinOrderByAggregateInput
    _sum?: AccountTokenSumOrderByAggregateInput
  }

  export type AccountTokenScalarWhereWithAggregatesInput = {
    AND?: AccountTokenScalarWhereWithAggregatesInput | AccountTokenScalarWhereWithAggregatesInput[]
    OR?: AccountTokenScalarWhereWithAggregatesInput[]
    NOT?: AccountTokenScalarWhereWithAggregatesInput | AccountTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountToken"> | number
    token?: StringWithAggregatesFilter<"AccountToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountToken"> | Date | string
    accountId?: StringWithAggregatesFilter<"AccountToken"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    gender?: EnumUSER__GENDER_ALIASFilter<"User"> | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accountId?: StringFilter<"User"> | string
    vehicles?: VehicleListRelationFilter
    parkingLotReviews?: ParkingLotReviewListRelationFilter
    parkingLots?: ParkingLotListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
    userNotifications?: UserNotificationListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    parkingLotReviews?: ParkingLotReviewOrderByRelationAggregateInput
    parkingLots?: ParkingLotOrderByRelationAggregateInput
    paymentRecords?: PaymentRecordOrderByRelationAggregateInput
    userNotifications?: UserNotificationOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    gender?: EnumUSER__GENDER_ALIASFilter<"User"> | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    parkingLotReviews?: ParkingLotReviewListRelationFilter
    parkingLots?: ParkingLotListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
    userNotifications?: UserNotificationListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id" | "accountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumUSER__GENDER_ALIASWithAggregatesFilter<"User"> | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    accountId?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserNotificationWhereInput = {
    AND?: UserNotificationWhereInput | UserNotificationWhereInput[]
    OR?: UserNotificationWhereInput[]
    NOT?: UserNotificationWhereInput | UserNotificationWhereInput[]
    id?: IntFilter<"UserNotification"> | number
    title?: StringFilter<"UserNotification"> | string
    message?: StringFilter<"UserNotification"> | string
    read?: BoolFilter<"UserNotification"> | boolean
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
    updatedAt?: DateTimeFilter<"UserNotification"> | Date | string
    userId?: IntFilter<"UserNotification"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserNotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserNotificationWhereInput | UserNotificationWhereInput[]
    OR?: UserNotificationWhereInput[]
    NOT?: UserNotificationWhereInput | UserNotificationWhereInput[]
    title?: StringFilter<"UserNotification"> | string
    message?: StringFilter<"UserNotification"> | string
    read?: BoolFilter<"UserNotification"> | boolean
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
    updatedAt?: DateTimeFilter<"UserNotification"> | Date | string
    userId?: IntFilter<"UserNotification"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: UserNotificationCountOrderByAggregateInput
    _avg?: UserNotificationAvgOrderByAggregateInput
    _max?: UserNotificationMaxOrderByAggregateInput
    _min?: UserNotificationMinOrderByAggregateInput
    _sum?: UserNotificationSumOrderByAggregateInput
  }

  export type UserNotificationScalarWhereWithAggregatesInput = {
    AND?: UserNotificationScalarWhereWithAggregatesInput | UserNotificationScalarWhereWithAggregatesInput[]
    OR?: UserNotificationScalarWhereWithAggregatesInput[]
    NOT?: UserNotificationScalarWhereWithAggregatesInput | UserNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserNotification"> | number
    title?: StringWithAggregatesFilter<"UserNotification"> | string
    message?: StringWithAggregatesFilter<"UserNotification"> | string
    read?: BoolWithAggregatesFilter<"UserNotification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserNotification"> | Date | string
    userId?: IntWithAggregatesFilter<"UserNotification"> | number
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    type?: EnumVEHICLE__TYPE_ALIASFilter<"Vehicle"> | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    imageUrl?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    ownerId?: IntFilter<"Vehicle"> | number
    reservations?: ReservationListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    type?: EnumVEHICLE__TYPE_ALIASFilter<"Vehicle"> | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    imageUrl?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    ownerId?: IntFilter<"Vehicle"> | number
    reservations?: ReservationListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    type?: EnumVEHICLE__TYPE_ALIASWithAggregatesFilter<"Vehicle"> | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    imageUrl?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Vehicle"> | number
  }

  export type ParkingLotWhereInput = {
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    id?: IntFilter<"ParkingLot"> | number
    name?: StringFilter<"ParkingLot"> | string
    description?: StringFilter<"ParkingLot"> | string
    latitude?: FloatFilter<"ParkingLot"> | number
    longitude?: FloatFilter<"ParkingLot"> | number
    mediaUrls?: StringNullableListFilter<"ParkingLot">
    ratings?: FloatFilter<"ParkingLot"> | number
    phone?: StringFilter<"ParkingLot"> | string
    openAt?: StringFilter<"ParkingLot"> | string
    closeAt?: StringFilter<"ParkingLot"> | string
    status?: EnumPARKING_LOT__STATUS_ALIASFilter<"ParkingLot"> | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFilter<"ParkingLot"> | boolean
    approvedAt?: DateTimeNullableFilter<"ParkingLot"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    ownerId?: IntFilter<"ParkingLot"> | number
    parkingSpots?: ParkingSpotListRelationFilter
    parkingLotServices?: ParkingLotServiceListRelationFilter
    parkingLotReviews?: ParkingLotReviewListRelationFilter
    parkingLotPrices?: ParkingLotPriceListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ParkingLotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mediaUrls?: SortOrder
    ratings?: SortOrder
    phone?: SortOrder
    openAt?: SortOrder
    closeAt?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    parkingSpots?: ParkingSpotOrderByRelationAggregateInput
    parkingLotServices?: ParkingLotServiceOrderByRelationAggregateInput
    parkingLotReviews?: ParkingLotReviewOrderByRelationAggregateInput
    parkingLotPrices?: ParkingLotPriceOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type ParkingLotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    name?: StringFilter<"ParkingLot"> | string
    description?: StringFilter<"ParkingLot"> | string
    latitude?: FloatFilter<"ParkingLot"> | number
    longitude?: FloatFilter<"ParkingLot"> | number
    mediaUrls?: StringNullableListFilter<"ParkingLot">
    ratings?: FloatFilter<"ParkingLot"> | number
    phone?: StringFilter<"ParkingLot"> | string
    openAt?: StringFilter<"ParkingLot"> | string
    closeAt?: StringFilter<"ParkingLot"> | string
    status?: EnumPARKING_LOT__STATUS_ALIASFilter<"ParkingLot"> | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFilter<"ParkingLot"> | boolean
    approvedAt?: DateTimeNullableFilter<"ParkingLot"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    ownerId?: IntFilter<"ParkingLot"> | number
    parkingSpots?: ParkingSpotListRelationFilter
    parkingLotServices?: ParkingLotServiceListRelationFilter
    parkingLotReviews?: ParkingLotReviewListRelationFilter
    parkingLotPrices?: ParkingLotPriceListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ParkingLotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mediaUrls?: SortOrder
    ratings?: SortOrder
    phone?: SortOrder
    openAt?: SortOrder
    closeAt?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: ParkingLotCountOrderByAggregateInput
    _avg?: ParkingLotAvgOrderByAggregateInput
    _max?: ParkingLotMaxOrderByAggregateInput
    _min?: ParkingLotMinOrderByAggregateInput
    _sum?: ParkingLotSumOrderByAggregateInput
  }

  export type ParkingLotScalarWhereWithAggregatesInput = {
    AND?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    OR?: ParkingLotScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingLot"> | number
    name?: StringWithAggregatesFilter<"ParkingLot"> | string
    description?: StringWithAggregatesFilter<"ParkingLot"> | string
    latitude?: FloatWithAggregatesFilter<"ParkingLot"> | number
    longitude?: FloatWithAggregatesFilter<"ParkingLot"> | number
    mediaUrls?: StringNullableListFilter<"ParkingLot">
    ratings?: FloatWithAggregatesFilter<"ParkingLot"> | number
    phone?: StringWithAggregatesFilter<"ParkingLot"> | string
    openAt?: StringWithAggregatesFilter<"ParkingLot"> | string
    closeAt?: StringWithAggregatesFilter<"ParkingLot"> | string
    status?: EnumPARKING_LOT__STATUS_ALIASWithAggregatesFilter<"ParkingLot"> | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolWithAggregatesFilter<"ParkingLot"> | boolean
    approvedAt?: DateTimeNullableWithAggregatesFilter<"ParkingLot"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
    ownerId?: IntWithAggregatesFilter<"ParkingLot"> | number
  }

  export type ParkingLotPriceWhereInput = {
    AND?: ParkingLotPriceWhereInput | ParkingLotPriceWhereInput[]
    OR?: ParkingLotPriceWhereInput[]
    NOT?: ParkingLotPriceWhereInput | ParkingLotPriceWhereInput[]
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingLotPrice"> | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFilter<"ParkingLotPrice"> | number
    parkingLotId?: IntFilter<"ParkingLotPrice"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }

  export type ParkingLotPriceOrderByWithRelationInput = {
    vehicleType?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
  }

  export type ParkingLotPriceWhereUniqueInput = Prisma.AtLeast<{
    vehicleType_parkingLotId?: ParkingLotPriceVehicleTypeParkingLotIdCompoundUniqueInput
    AND?: ParkingLotPriceWhereInput | ParkingLotPriceWhereInput[]
    OR?: ParkingLotPriceWhereInput[]
    NOT?: ParkingLotPriceWhereInput | ParkingLotPriceWhereInput[]
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingLotPrice"> | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFilter<"ParkingLotPrice"> | number
    parkingLotId?: IntFilter<"ParkingLotPrice"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }, "vehicleType_parkingLotId">

  export type ParkingLotPriceOrderByWithAggregationInput = {
    vehicleType?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
    _count?: ParkingLotPriceCountOrderByAggregateInput
    _avg?: ParkingLotPriceAvgOrderByAggregateInput
    _max?: ParkingLotPriceMaxOrderByAggregateInput
    _min?: ParkingLotPriceMinOrderByAggregateInput
    _sum?: ParkingLotPriceSumOrderByAggregateInput
  }

  export type ParkingLotPriceScalarWhereWithAggregatesInput = {
    AND?: ParkingLotPriceScalarWhereWithAggregatesInput | ParkingLotPriceScalarWhereWithAggregatesInput[]
    OR?: ParkingLotPriceScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotPriceScalarWhereWithAggregatesInput | ParkingLotPriceScalarWhereWithAggregatesInput[]
    vehicleType?: EnumVEHICLE__TYPE_ALIASWithAggregatesFilter<"ParkingLotPrice"> | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatWithAggregatesFilter<"ParkingLotPrice"> | number
    parkingLotId?: IntWithAggregatesFilter<"ParkingLotPrice"> | number
  }

  export type ParkingLotReviewWhereInput = {
    AND?: ParkingLotReviewWhereInput | ParkingLotReviewWhereInput[]
    OR?: ParkingLotReviewWhereInput[]
    NOT?: ParkingLotReviewWhereInput | ParkingLotReviewWhereInput[]
    id?: IntFilter<"ParkingLotReview"> | number
    rating?: IntFilter<"ParkingLotReview"> | number
    comment?: StringFilter<"ParkingLotReview"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotReview">
    createdAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotReview"> | number
    userId?: IntFilter<"ParkingLotReview"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ParkingLotReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    mediaUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParkingLotReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingLotReviewWhereInput | ParkingLotReviewWhereInput[]
    OR?: ParkingLotReviewWhereInput[]
    NOT?: ParkingLotReviewWhereInput | ParkingLotReviewWhereInput[]
    rating?: IntFilter<"ParkingLotReview"> | number
    comment?: StringFilter<"ParkingLotReview"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotReview">
    createdAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotReview"> | number
    userId?: IntFilter<"ParkingLotReview"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ParkingLotReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    mediaUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
    _count?: ParkingLotReviewCountOrderByAggregateInput
    _avg?: ParkingLotReviewAvgOrderByAggregateInput
    _max?: ParkingLotReviewMaxOrderByAggregateInput
    _min?: ParkingLotReviewMinOrderByAggregateInput
    _sum?: ParkingLotReviewSumOrderByAggregateInput
  }

  export type ParkingLotReviewScalarWhereWithAggregatesInput = {
    AND?: ParkingLotReviewScalarWhereWithAggregatesInput | ParkingLotReviewScalarWhereWithAggregatesInput[]
    OR?: ParkingLotReviewScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotReviewScalarWhereWithAggregatesInput | ParkingLotReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingLotReview"> | number
    rating?: IntWithAggregatesFilter<"ParkingLotReview"> | number
    comment?: StringWithAggregatesFilter<"ParkingLotReview"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotReview">
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLotReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLotReview"> | Date | string
    parkingLotId?: IntWithAggregatesFilter<"ParkingLotReview"> | number
    userId?: IntWithAggregatesFilter<"ParkingLotReview"> | number
  }

  export type ParkingLotServiceWhereInput = {
    AND?: ParkingLotServiceWhereInput | ParkingLotServiceWhereInput[]
    OR?: ParkingLotServiceWhereInput[]
    NOT?: ParkingLotServiceWhereInput | ParkingLotServiceWhereInput[]
    id?: IntFilter<"ParkingLotService"> | number
    name?: StringFilter<"ParkingLotService"> | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<"ParkingLotService"> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFilter<"ParkingLotService"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotService">
    price?: FloatFilter<"ParkingLotService"> | number
    vehicleTypes?: EnumVEHICLE__TYPE_ALIASNullableListFilter<"ParkingLotService">
    createdAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotService"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }

  export type ParkingLotServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrls?: SortOrder
    price?: SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
  }

  export type ParkingLotServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingLotServiceWhereInput | ParkingLotServiceWhereInput[]
    OR?: ParkingLotServiceWhereInput[]
    NOT?: ParkingLotServiceWhereInput | ParkingLotServiceWhereInput[]
    name?: StringFilter<"ParkingLotService"> | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<"ParkingLotService"> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFilter<"ParkingLotService"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotService">
    price?: FloatFilter<"ParkingLotService"> | number
    vehicleTypes?: EnumVEHICLE__TYPE_ALIASNullableListFilter<"ParkingLotService">
    createdAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotService"> | number
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }, "id">

  export type ParkingLotServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrls?: SortOrder
    price?: SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    _count?: ParkingLotServiceCountOrderByAggregateInput
    _avg?: ParkingLotServiceAvgOrderByAggregateInput
    _max?: ParkingLotServiceMaxOrderByAggregateInput
    _min?: ParkingLotServiceMinOrderByAggregateInput
    _sum?: ParkingLotServiceSumOrderByAggregateInput
  }

  export type ParkingLotServiceScalarWhereWithAggregatesInput = {
    AND?: ParkingLotServiceScalarWhereWithAggregatesInput | ParkingLotServiceScalarWhereWithAggregatesInput[]
    OR?: ParkingLotServiceScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotServiceScalarWhereWithAggregatesInput | ParkingLotServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingLotService"> | number
    name?: StringWithAggregatesFilter<"ParkingLotService"> | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASWithAggregatesFilter<"ParkingLotService"> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringWithAggregatesFilter<"ParkingLotService"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotService">
    price?: FloatWithAggregatesFilter<"ParkingLotService"> | number
    vehicleTypes?: EnumVEHICLE__TYPE_ALIASNullableListFilter<"ParkingLotService">
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLotService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLotService"> | Date | string
    parkingLotId?: IntWithAggregatesFilter<"ParkingLotService"> | number
  }

  export type ParkingSpotWhereInput = {
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    id?: IntFilter<"ParkingSpot"> | number
    name?: StringFilter<"ParkingSpot"> | string
    isAvailable?: BoolFilter<"ParkingSpot"> | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingSpot"> | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    parkingLotId?: IntFilter<"ParkingSpot"> | number
    reservations?: ReservationListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }

  export type ParkingSpotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    vehicleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
    parkingLot?: ParkingLotOrderByWithRelationInput
  }

  export type ParkingSpotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    name?: StringFilter<"ParkingSpot"> | string
    isAvailable?: BoolFilter<"ParkingSpot"> | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingSpot"> | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    parkingLotId?: IntFilter<"ParkingSpot"> | number
    reservations?: ReservationListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    parkingLot?: XOR<ParkingLotRelationFilter, ParkingLotWhereInput>
  }, "id">

  export type ParkingSpotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    vehicleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    _count?: ParkingSpotCountOrderByAggregateInput
    _avg?: ParkingSpotAvgOrderByAggregateInput
    _max?: ParkingSpotMaxOrderByAggregateInput
    _min?: ParkingSpotMinOrderByAggregateInput
    _sum?: ParkingSpotSumOrderByAggregateInput
  }

  export type ParkingSpotScalarWhereWithAggregatesInput = {
    AND?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    OR?: ParkingSpotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSpot"> | number
    name?: StringWithAggregatesFilter<"ParkingSpot"> | string
    isAvailable?: BoolWithAggregatesFilter<"ParkingSpot"> | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASWithAggregatesFilter<"ParkingSpot"> | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSpot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSpot"> | Date | string
    parkingLotId?: IntWithAggregatesFilter<"ParkingSpot"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    checkInAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFilter<"Reservation"> | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    parkingSpotId?: IntFilter<"Reservation"> | number
    vehicleId?: IntFilter<"Reservation"> | number
    parkingRecord?: XOR<ParkingRecordNullableRelationFilter, ParkingRecordWhereInput> | null
    parkingSpot?: XOR<ParkingSpotRelationFilter, ParkingSpotWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
    parkingRecord?: ParkingRecordOrderByWithRelationInput
    parkingSpot?: ParkingSpotOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    checkInAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFilter<"Reservation"> | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    parkingSpotId?: IntFilter<"Reservation"> | number
    vehicleId?: IntFilter<"Reservation"> | number
    parkingRecord?: XOR<ParkingRecordNullableRelationFilter, ParkingRecordWhereInput> | null
    parkingSpot?: XOR<ParkingSpotRelationFilter, ParkingSpotWhereInput>
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    checkInAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumRESERVATION__STATUS_ALIASWithAggregatesFilter<"Reservation"> | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    parkingSpotId?: IntWithAggregatesFilter<"Reservation"> | number
    vehicleId?: IntWithAggregatesFilter<"Reservation"> | number
  }

  export type ParkingRecordWhereInput = {
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    id?: IntFilter<"ParkingRecord"> | number
    checkInAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalPrice?: FloatNullableFilter<"ParkingRecord"> | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFilter<"ParkingRecord"> | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    vehicleId?: IntNullableFilter<"ParkingRecord"> | number | null
    parkingSpotId?: IntNullableFilter<"ParkingRecord"> | number | null
    reservationId?: IntNullableFilter<"ParkingRecord"> | number | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
    parkingSpot?: XOR<ParkingSpotNullableRelationFilter, ParkingSpotWhereInput> | null
    reservation?: XOR<ReservationNullableRelationFilter, ReservationWhereInput> | null
    paymentRecord?: XOR<PaymentRecordNullableRelationFilter, PaymentRecordWhereInput> | null
  }

  export type ParkingRecordOrderByWithRelationInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    parkingSpotId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    parkingSpot?: ParkingSpotOrderByWithRelationInput
    reservation?: ReservationOrderByWithRelationInput
    paymentRecord?: PaymentRecordOrderByWithRelationInput
  }

  export type ParkingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reservationId?: number
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    checkInAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalPrice?: FloatNullableFilter<"ParkingRecord"> | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFilter<"ParkingRecord"> | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    vehicleId?: IntNullableFilter<"ParkingRecord"> | number | null
    parkingSpotId?: IntNullableFilter<"ParkingRecord"> | number | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
    parkingSpot?: XOR<ParkingSpotNullableRelationFilter, ParkingSpotWhereInput> | null
    reservation?: XOR<ReservationNullableRelationFilter, ReservationWhereInput> | null
    paymentRecord?: XOR<PaymentRecordNullableRelationFilter, PaymentRecordWhereInput> | null
  }, "id" | "reservationId">

  export type ParkingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    parkingSpotId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    _count?: ParkingRecordCountOrderByAggregateInput
    _avg?: ParkingRecordAvgOrderByAggregateInput
    _max?: ParkingRecordMaxOrderByAggregateInput
    _min?: ParkingRecordMinOrderByAggregateInput
    _sum?: ParkingRecordSumOrderByAggregateInput
  }

  export type ParkingRecordScalarWhereWithAggregatesInput = {
    AND?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    OR?: ParkingRecordScalarWhereWithAggregatesInput[]
    NOT?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingRecord"> | number
    checkInAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"ParkingRecord"> | Date | string | null
    totalPrice?: FloatNullableWithAggregatesFilter<"ParkingRecord"> | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASWithAggregatesFilter<"ParkingRecord"> | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    vehicleId?: IntNullableWithAggregatesFilter<"ParkingRecord"> | number | null
    parkingSpotId?: IntNullableWithAggregatesFilter<"ParkingRecord"> | number | null
    reservationId?: IntNullableWithAggregatesFilter<"ParkingRecord"> | number | null
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFilter<"PaymentRecord"> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFilter<"PaymentRecord"> | number
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    userId?: IntFilter<"PaymentRecord"> | number
    parkingRecordId?: IntFilter<"PaymentRecord"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    parkingRecord?: XOR<ParkingRecordRelationFilter, ParkingRecordWhereInput>
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
    user?: UserOrderByWithRelationInput
    parkingRecord?: ParkingRecordOrderByWithRelationInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    parkingRecordId?: number
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFilter<"PaymentRecord"> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFilter<"PaymentRecord"> | number
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    userId?: IntFilter<"PaymentRecord"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    parkingRecord?: XOR<ParkingRecordRelationFilter, ParkingRecordWhereInput>
  }, "id" | "parkingRecordId">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentRecord"> | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASWithAggregatesFilter<"PaymentRecord"> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatWithAggregatesFilter<"PaymentRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
    userId?: IntWithAggregatesFilter<"PaymentRecord"> | number
    parkingRecordId?: IntWithAggregatesFilter<"PaymentRecord"> | number
  }

  export type AccountCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAccountInput
    AccountToken?: AccountTokenCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
    AccountToken?: AccountTokenUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAccountNestedInput
    AccountToken?: AccountTokenUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
    AccountToken?: AccountTokenUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenCreateInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutAccountTokenInput
  }

  export type AccountTokenUncheckedCreateInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type AccountTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutAccountTokenNestedInput
  }

  export type AccountTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTokenCreateManyInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type AccountTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type UserNotificationCreateInput = {
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserNotificationsInput
  }

  export type UserNotificationUncheckedCreateInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserNotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserNotificationsNestedInput
  }

  export type UserNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserNotificationCreateManyInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserNotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleCreateInput = {
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
    owner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
  }

  export type VehicleUpdateManyMutationInput = {
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotCreateInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceCreateNestedManyWithoutParkingLotInput
    owner: UserCreateNestedOneWithoutParkingLotsInput
  }

  export type ParkingLotUncheckedCreateInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingSpots?: ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUpdateManyWithoutParkingLotNestedInput
    owner?: UserUpdateOneRequiredWithoutParkingLotsNestedInput
  }

  export type ParkingLotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingSpots?: ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotCreateManyInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
  }

  export type ParkingLotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceCreateInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
    parkingLot: ParkingLotCreateNestedOneWithoutParkingLotPricesInput
  }

  export type ParkingLotPriceUncheckedCreateInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
    parkingLotId: number
  }

  export type ParkingLotPriceUpdateInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingLotPricesNestedInput
  }

  export type ParkingLotPriceUncheckedUpdateInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceCreateManyInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
    parkingLotId: number
  }

  export type ParkingLotPriceUpdateManyMutationInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceUncheckedUpdateManyInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotReviewCreateInput = {
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingLotReviewsInput
    user: UserCreateNestedOneWithoutParkingLotReviewsInput
  }

  export type ParkingLotReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
    userId: number
  }

  export type ParkingLotReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingLotReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutParkingLotReviewsNestedInput
  }

  export type ParkingLotReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotReviewCreateManyInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
    userId: number
  }

  export type ParkingLotReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotServiceCreateInput = {
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingLotServicesInput
  }

  export type ParkingLotServiceUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
  }

  export type ParkingLotServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingLotServicesNestedInput
  }

  export type ParkingLotServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotServiceCreateManyInput = {
    id?: number
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
  }

  export type ParkingLotServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingSpotCreateInput = {
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutParkingSpotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingSpotsInput
  }

  export type ParkingSpotUncheckedCreateInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutParkingSpotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSpotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutParkingSpotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingSpotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutParkingSpotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSpotCreateManyInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
  }

  export type ParkingSpotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordCreateNestedOneWithoutReservationInput
    parkingSpot: ParkingSpotCreateNestedOneWithoutReservationsInput
    vehicle: VehicleCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId: number
    vehicleId: number
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUpdateOneWithoutReservationNestedInput
    parkingSpot?: ParkingSpotUpdateOneRequiredWithoutReservationsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId: number
    vehicleId: number
  }

  export type ReservationUpdateManyMutationInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingRecordCreateInput = {
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSpotCreateNestedOneWithoutParkingRecordsInput
    reservation?: ReservationCreateNestedOneWithoutParkingRecordInput
    paymentRecord?: PaymentRecordCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    parkingSpotId?: number | null
    reservationId?: number | null
    paymentRecord?: PaymentRecordUncheckedCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUpdateInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSpotUpdateOneWithoutParkingRecordsNestedInput
    reservation?: ReservationUpdateOneWithoutParkingRecordNestedInput
    paymentRecord?: PaymentRecordUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecord?: PaymentRecordUncheckedUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordCreateManyInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    parkingSpotId?: number | null
    reservationId?: number | null
  }

  export type ParkingRecordUpdateManyMutationInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentRecordCreateInput = {
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentRecordsInput
    parkingRecord: ParkingRecordCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    parkingRecordId: number
  }

  export type PaymentRecordUpdateInput = {
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentRecordsNestedInput
    parkingRecord?: ParkingRecordUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    parkingRecordId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordCreateManyInput = {
    id?: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    parkingRecordId: number
  }

  export type PaymentRecordUpdateManyMutationInput = {
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    parkingRecordId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumACCOUNT__ROLE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.ACCOUNT__ROLE_ALIAS | EnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel> | $Enums.ACCOUNT__ROLE_ALIAS
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AccountTokenListRelationFilter = {
    every?: AccountTokenWhereInput
    some?: AccountTokenWhereInput
    none?: AccountTokenWhereInput
  }

  export type AccountTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumACCOUNT__ROLE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ACCOUNT__ROLE_ALIAS | EnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumACCOUNT__ROLE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.ACCOUNT__ROLE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type AccountTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type AccountTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type AccountTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type AccountTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUSER__GENDER_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.USER__GENDER_ALIAS | EnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel> | $Enums.USER__GENDER_ALIAS
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type ParkingLotReviewListRelationFilter = {
    every?: ParkingLotReviewWhereInput
    some?: ParkingLotReviewWhereInput
    none?: ParkingLotReviewWhereInput
  }

  export type ParkingLotListRelationFilter = {
    every?: ParkingLotWhereInput
    some?: ParkingLotWhereInput
    none?: ParkingLotWhereInput
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type UserNotificationListRelationFilter = {
    every?: UserNotificationWhereInput
    some?: UserNotificationWhereInput
    none?: UserNotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUSER__GENDER_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER__GENDER_ALIAS | EnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER__GENDER_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.USER__GENDER_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel>
    _max?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserNotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVEHICLE__TYPE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.VEHICLE__TYPE_ALIAS | EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel> | $Enums.VEHICLE__TYPE_ALIAS
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ParkingRecordListRelationFilter = {
    every?: ParkingRecordWhereInput
    some?: ParkingRecordWhereInput
    none?: ParkingRecordWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumVEHICLE__TYPE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VEHICLE__TYPE_ALIAS | EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumVEHICLE__TYPE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.VEHICLE__TYPE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT__STATUS_ALIAS | EnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel> | $Enums.PARKING_LOT__STATUS_ALIAS
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ParkingSpotListRelationFilter = {
    every?: ParkingSpotWhereInput
    some?: ParkingSpotWhereInput
    none?: ParkingSpotWhereInput
  }

  export type ParkingLotServiceListRelationFilter = {
    every?: ParkingLotServiceWhereInput
    some?: ParkingLotServiceWhereInput
    none?: ParkingLotServiceWhereInput
  }

  export type ParkingLotPriceListRelationFilter = {
    every?: ParkingLotPriceWhereInput
    some?: ParkingLotPriceWhereInput
    none?: ParkingLotPriceWhereInput
  }

  export type ParkingSpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    mediaUrls?: SortOrder
    ratings?: SortOrder
    phone?: SortOrder
    openAt?: SortOrder
    closeAt?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ParkingLotAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ratings?: SortOrder
    ownerId?: SortOrder
  }

  export type ParkingLotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ratings?: SortOrder
    phone?: SortOrder
    openAt?: SortOrder
    closeAt?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ParkingLotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ratings?: SortOrder
    phone?: SortOrder
    openAt?: SortOrder
    closeAt?: SortOrder
    status?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ParkingLotSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ratings?: SortOrder
    ownerId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPARKING_LOT__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT__STATUS_ALIAS | EnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_LOT__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ParkingLotRelationFilter = {
    is?: ParkingLotWhereInput
    isNot?: ParkingLotWhereInput
  }

  export type ParkingLotPriceVehicleTypeParkingLotIdCompoundUniqueInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    parkingLotId: number
  }

  export type ParkingLotPriceCountOrderByAggregateInput = {
    vehicleType?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotPriceAvgOrderByAggregateInput = {
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotPriceMaxOrderByAggregateInput = {
    vehicleType?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotPriceMinOrderByAggregateInput = {
    vehicleType?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotPriceSumOrderByAggregateInput = {
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    mediaUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
  }

  export type ParkingLotReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
  }

  export type ParkingLotReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
  }

  export type ParkingLotReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
  }

  export type ParkingLotReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    parkingLotId?: SortOrder
    userId?: SortOrder
  }

  export type EnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
  }

  export type EnumVEHICLE__TYPE_ALIASNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel> | null
    has?: $Enums.VEHICLE__TYPE_ALIAS | EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    hasSome?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ParkingLotServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    mediaUrls?: SortOrder
    price?: SortOrder
    vehicleTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingLotServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    parkingLotId?: SortOrder
  }

  export type EnumPARKING_LOT_SERVICE__TYPE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel>
  }

  export type ParkingSpotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    vehicleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingSpotAvgOrderByAggregateInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingSpotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    vehicleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingSpotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isAvailable?: SortOrder
    vehicleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotId?: SortOrder
  }

  export type ParkingSpotSumOrderByAggregateInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
  }

  export type EnumRESERVATION__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.RESERVATION__STATUS_ALIAS | EnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel> | $Enums.RESERVATION__STATUS_ALIAS
  }

  export type ParkingRecordNullableRelationFilter = {
    is?: ParkingRecordWhereInput | null
    isNot?: ParkingRecordWhereInput | null
  }

  export type ParkingSpotRelationFilter = {
    is?: ParkingSpotWhereInput
    isNot?: ParkingSpotWhereInput
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    parkingSpotId?: SortOrder
    vehicleId?: SortOrder
  }

  export type EnumRESERVATION__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RESERVATION__STATUS_ALIAS | EnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumRESERVATION__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.RESERVATION__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_RECORD__STATUS_ALIAS | EnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel> | $Enums.PARKING_RECORD__STATUS_ALIAS
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleNullableRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type ParkingSpotNullableRelationFilter = {
    is?: ParkingSpotWhereInput | null
    isNot?: ParkingSpotWhereInput | null
  }

  export type ReservationNullableRelationFilter = {
    is?: ReservationWhereInput | null
    isNot?: ReservationWhereInput | null
  }

  export type PaymentRecordNullableRelationFilter = {
    is?: PaymentRecordWhereInput | null
    isNot?: PaymentRecordWhereInput | null
  }

  export type ParkingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    parkingSpotId?: SortOrder
    reservationId?: SortOrder
  }

  export type ParkingRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    vehicleId?: SortOrder
    parkingSpotId?: SortOrder
    reservationId?: SortOrder
  }

  export type ParkingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    parkingSpotId?: SortOrder
    reservationId?: SortOrder
  }

  export type ParkingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleId?: SortOrder
    parkingSpotId?: SortOrder
    reservationId?: SortOrder
  }

  export type ParkingRecordSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    vehicleId?: SortOrder
    parkingSpotId?: SortOrder
    reservationId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumPARKING_RECORD__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_RECORD__STATUS_ALIAS | EnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_RECORD__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_RECORD__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_RECORD__METHOD_ALIAS | EnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
  }

  export type ParkingRecordRelationFilter = {
    is?: ParkingRecordWhereInput
    isNot?: ParkingRecordWhereInput
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type EnumPAYMENT_RECORD__METHOD_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_RECORD__METHOD_ALIAS | EnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_RECORD__METHOD_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type AccountTokenCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput> | AccountTokenCreateWithoutAccountInput[] | AccountTokenUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountTokenCreateOrConnectWithoutAccountInput | AccountTokenCreateOrConnectWithoutAccountInput[]
    createMany?: AccountTokenCreateManyAccountInputEnvelope
    connect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type AccountTokenUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput> | AccountTokenCreateWithoutAccountInput[] | AccountTokenUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountTokenCreateOrConnectWithoutAccountInput | AccountTokenCreateOrConnectWithoutAccountInput[]
    createMany?: AccountTokenCreateManyAccountInputEnvelope
    connect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.ACCOUNT__ROLE_ALIAS
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type AccountTokenUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput> | AccountTokenCreateWithoutAccountInput[] | AccountTokenUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountTokenCreateOrConnectWithoutAccountInput | AccountTokenCreateOrConnectWithoutAccountInput[]
    upsert?: AccountTokenUpsertWithWhereUniqueWithoutAccountInput | AccountTokenUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountTokenCreateManyAccountInputEnvelope
    set?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    disconnect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    delete?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    connect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    update?: AccountTokenUpdateWithWhereUniqueWithoutAccountInput | AccountTokenUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountTokenUpdateManyWithWhereWithoutAccountInput | AccountTokenUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountTokenScalarWhereInput | AccountTokenScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type AccountTokenUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput> | AccountTokenCreateWithoutAccountInput[] | AccountTokenUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountTokenCreateOrConnectWithoutAccountInput | AccountTokenCreateOrConnectWithoutAccountInput[]
    upsert?: AccountTokenUpsertWithWhereUniqueWithoutAccountInput | AccountTokenUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountTokenCreateManyAccountInputEnvelope
    set?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    disconnect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    delete?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    connect?: AccountTokenWhereUniqueInput | AccountTokenWhereUniqueInput[]
    update?: AccountTokenUpdateWithWhereUniqueWithoutAccountInput | AccountTokenUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountTokenUpdateManyWithWhereWithoutAccountInput | AccountTokenUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountTokenScalarWhereInput | AccountTokenScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutAccountTokenInput = {
    create?: XOR<AccountCreateWithoutAccountTokenInput, AccountUncheckedCreateWithoutAccountTokenInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountTokenInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutAccountTokenNestedInput = {
    create?: XOR<AccountCreateWithoutAccountTokenInput, AccountUncheckedCreateWithoutAccountTokenInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountTokenInput
    upsert?: AccountUpsertWithoutAccountTokenInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAccountTokenInput, AccountUpdateWithoutAccountTokenInput>, AccountUncheckedUpdateWithoutAccountTokenInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ParkingLotReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput> | ParkingLotReviewCreateWithoutUserInput[] | ParkingLotReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutUserInput | ParkingLotReviewCreateOrConnectWithoutUserInput[]
    createMany?: ParkingLotReviewCreateManyUserInputEnvelope
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
  }

  export type ParkingLotCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type UserNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type VehicleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput> | ParkingLotReviewCreateWithoutUserInput[] | ParkingLotReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutUserInput | ParkingLotReviewCreateOrConnectWithoutUserInput[]
    createMany?: ParkingLotReviewCreateManyUserInputEnvelope
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
  }

  export type ParkingLotUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type UserNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUSER__GENDER_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.USER__GENDER_ALIAS
  }

  export type VehicleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ParkingLotReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput> | ParkingLotReviewCreateWithoutUserInput[] | ParkingLotReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutUserInput | ParkingLotReviewCreateOrConnectWithoutUserInput[]
    upsert?: ParkingLotReviewUpsertWithWhereUniqueWithoutUserInput | ParkingLotReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingLotReviewCreateManyUserInputEnvelope
    set?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    disconnect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    delete?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    update?: ParkingLotReviewUpdateWithWhereUniqueWithoutUserInput | ParkingLotReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingLotReviewUpdateManyWithWhereWithoutUserInput | ParkingLotReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
  }

  export type ParkingLotUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingLotUpsertWithWhereUniqueWithoutOwnerInput | ParkingLotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    set?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    disconnect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    delete?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    update?: ParkingLotUpdateWithWhereUniqueWithoutOwnerInput | ParkingLotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingLotUpdateManyWithWhereWithoutOwnerInput | ParkingLotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutUserInput | PaymentRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutUserInput | PaymentRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutUserInput | PaymentRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type UserNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutUserInput | UserNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutUserInput | UserNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutUserInput | UserNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type AccountUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput> | ParkingLotReviewCreateWithoutUserInput[] | ParkingLotReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutUserInput | ParkingLotReviewCreateOrConnectWithoutUserInput[]
    upsert?: ParkingLotReviewUpsertWithWhereUniqueWithoutUserInput | ParkingLotReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingLotReviewCreateManyUserInputEnvelope
    set?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    disconnect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    delete?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    update?: ParkingLotReviewUpdateWithWhereUniqueWithoutUserInput | ParkingLotReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingLotReviewUpdateManyWithWhereWithoutUserInput | ParkingLotReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
  }

  export type ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput> | ParkingLotCreateWithoutOwnerInput[] | ParkingLotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingLotCreateOrConnectWithoutOwnerInput | ParkingLotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingLotUpsertWithWhereUniqueWithoutOwnerInput | ParkingLotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingLotCreateManyOwnerInputEnvelope
    set?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    disconnect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    delete?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    connect?: ParkingLotWhereUniqueInput | ParkingLotWhereUniqueInput[]
    update?: ParkingLotUpdateWithWhereUniqueWithoutOwnerInput | ParkingLotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingLotUpdateManyWithWhereWithoutOwnerInput | ParkingLotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutUserInput | PaymentRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutUserInput | PaymentRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutUserInput | PaymentRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type UserNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput> | UserNotificationCreateWithoutUserInput[] | UserNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserNotificationCreateOrConnectWithoutUserInput | UserNotificationCreateOrConnectWithoutUserInput[]
    upsert?: UserNotificationUpsertWithWhereUniqueWithoutUserInput | UserNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserNotificationCreateManyUserInputEnvelope
    set?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    disconnect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    delete?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    connect?: UserNotificationWhereUniqueInput | UserNotificationWhereUniqueInput[]
    update?: UserNotificationUpdateWithWhereUniqueWithoutUserInput | UserNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserNotificationUpdateManyWithWhereWithoutUserInput | UserNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserNotificationsInput = {
    create?: XOR<UserCreateWithoutUserNotificationsInput, UserUncheckedCreateWithoutUserNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutUserNotificationsInput, UserUncheckedCreateWithoutUserNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserNotificationsInput
    upsert?: UserUpsertWithoutUserNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserNotificationsInput, UserUpdateWithoutUserNotificationsInput>, UserUncheckedUpdateWithoutUserNotificationsInput>
  }

  export type ReservationCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.VEHICLE__TYPE_ALIAS
  }

  export type ReservationUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleInput | ReservationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleInput | ReservationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleInput | ReservationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput> | ReservationCreateWithoutVehicleInput[] | ReservationUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleInput | ReservationCreateOrConnectWithoutVehicleInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleInput | ReservationUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ReservationCreateManyVehicleInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleInput | ReservationUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleInput | ReservationUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingLotCreatemediaUrlsInput = {
    set: string[]
  }

  export type ParkingSpotCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput> | ParkingSpotCreateWithoutParkingLotInput[] | ParkingSpotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingLotInput | ParkingSpotCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingSpotCreateManyParkingLotInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type ParkingLotServiceCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput> | ParkingLotServiceCreateWithoutParkingLotInput[] | ParkingLotServiceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotServiceCreateOrConnectWithoutParkingLotInput | ParkingLotServiceCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotServiceCreateManyParkingLotInputEnvelope
    connect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
  }

  export type ParkingLotReviewCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput> | ParkingLotReviewCreateWithoutParkingLotInput[] | ParkingLotReviewUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutParkingLotInput | ParkingLotReviewCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotReviewCreateManyParkingLotInputEnvelope
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
  }

  export type ParkingLotPriceCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput> | ParkingLotPriceCreateWithoutParkingLotInput[] | ParkingLotPriceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotPriceCreateOrConnectWithoutParkingLotInput | ParkingLotPriceCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotPriceCreateManyParkingLotInputEnvelope
    connect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutParkingLotsInput = {
    create?: XOR<UserCreateWithoutParkingLotsInput, UserUncheckedCreateWithoutParkingLotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput> | ParkingSpotCreateWithoutParkingLotInput[] | ParkingSpotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingLotInput | ParkingSpotCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingSpotCreateManyParkingLotInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput> | ParkingLotServiceCreateWithoutParkingLotInput[] | ParkingLotServiceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotServiceCreateOrConnectWithoutParkingLotInput | ParkingLotServiceCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotServiceCreateManyParkingLotInputEnvelope
    connect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
  }

  export type ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput> | ParkingLotReviewCreateWithoutParkingLotInput[] | ParkingLotReviewUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutParkingLotInput | ParkingLotReviewCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotReviewCreateManyParkingLotInputEnvelope
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
  }

  export type ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput> | ParkingLotPriceCreateWithoutParkingLotInput[] | ParkingLotPriceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotPriceCreateOrConnectWithoutParkingLotInput | ParkingLotPriceCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingLotPriceCreateManyParkingLotInputEnvelope
    connect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingLotUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.PARKING_LOT__STATUS_ALIAS
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParkingSpotUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput> | ParkingSpotCreateWithoutParkingLotInput[] | ParkingSpotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingLotInput | ParkingSpotCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutParkingLotInput | ParkingSpotUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingSpotCreateManyParkingLotInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutParkingLotInput | ParkingSpotUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutParkingLotInput | ParkingSpotUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type ParkingLotServiceUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput> | ParkingLotServiceCreateWithoutParkingLotInput[] | ParkingLotServiceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotServiceCreateOrConnectWithoutParkingLotInput | ParkingLotServiceCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotServiceUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotServiceUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotServiceCreateManyParkingLotInputEnvelope
    set?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    disconnect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    delete?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    connect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    update?: ParkingLotServiceUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotServiceUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotServiceUpdateManyWithWhereWithoutParkingLotInput | ParkingLotServiceUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotServiceScalarWhereInput | ParkingLotServiceScalarWhereInput[]
  }

  export type ParkingLotReviewUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput> | ParkingLotReviewCreateWithoutParkingLotInput[] | ParkingLotReviewUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutParkingLotInput | ParkingLotReviewCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotReviewUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotReviewUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotReviewCreateManyParkingLotInputEnvelope
    set?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    disconnect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    delete?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    update?: ParkingLotReviewUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotReviewUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotReviewUpdateManyWithWhereWithoutParkingLotInput | ParkingLotReviewUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
  }

  export type ParkingLotPriceUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput> | ParkingLotPriceCreateWithoutParkingLotInput[] | ParkingLotPriceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotPriceCreateOrConnectWithoutParkingLotInput | ParkingLotPriceCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotPriceUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotPriceUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotPriceCreateManyParkingLotInputEnvelope
    set?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    disconnect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    delete?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    connect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    update?: ParkingLotPriceUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotPriceUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotPriceUpdateManyWithWhereWithoutParkingLotInput | ParkingLotPriceUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotPriceScalarWhereInput | ParkingLotPriceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutParkingLotsNestedInput = {
    create?: XOR<UserCreateWithoutParkingLotsInput, UserUncheckedCreateWithoutParkingLotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotsInput
    upsert?: UserUpsertWithoutParkingLotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingLotsInput, UserUpdateWithoutParkingLotsInput>, UserUncheckedUpdateWithoutParkingLotsInput>
  }

  export type ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput> | ParkingSpotCreateWithoutParkingLotInput[] | ParkingSpotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingLotInput | ParkingSpotCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutParkingLotInput | ParkingSpotUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingSpotCreateManyParkingLotInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutParkingLotInput | ParkingSpotUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutParkingLotInput | ParkingSpotUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput> | ParkingLotServiceCreateWithoutParkingLotInput[] | ParkingLotServiceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotServiceCreateOrConnectWithoutParkingLotInput | ParkingLotServiceCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotServiceUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotServiceUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotServiceCreateManyParkingLotInputEnvelope
    set?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    disconnect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    delete?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    connect?: ParkingLotServiceWhereUniqueInput | ParkingLotServiceWhereUniqueInput[]
    update?: ParkingLotServiceUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotServiceUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotServiceUpdateManyWithWhereWithoutParkingLotInput | ParkingLotServiceUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotServiceScalarWhereInput | ParkingLotServiceScalarWhereInput[]
  }

  export type ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput> | ParkingLotReviewCreateWithoutParkingLotInput[] | ParkingLotReviewUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotReviewCreateOrConnectWithoutParkingLotInput | ParkingLotReviewCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotReviewUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotReviewUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotReviewCreateManyParkingLotInputEnvelope
    set?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    disconnect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    delete?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    connect?: ParkingLotReviewWhereUniqueInput | ParkingLotReviewWhereUniqueInput[]
    update?: ParkingLotReviewUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotReviewUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotReviewUpdateManyWithWhereWithoutParkingLotInput | ParkingLotReviewUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
  }

  export type ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput> | ParkingLotPriceCreateWithoutParkingLotInput[] | ParkingLotPriceUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingLotPriceCreateOrConnectWithoutParkingLotInput | ParkingLotPriceCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingLotPriceUpsertWithWhereUniqueWithoutParkingLotInput | ParkingLotPriceUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingLotPriceCreateManyParkingLotInputEnvelope
    set?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    disconnect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    delete?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    connect?: ParkingLotPriceWhereUniqueInput | ParkingLotPriceWhereUniqueInput[]
    update?: ParkingLotPriceUpdateWithWhereUniqueWithoutParkingLotInput | ParkingLotPriceUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingLotPriceUpdateManyWithWhereWithoutParkingLotInput | ParkingLotPriceUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingLotPriceScalarWhereInput | ParkingLotPriceScalarWhereInput[]
  }

  export type ParkingLotCreateNestedOneWithoutParkingLotPricesInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotPricesInput, ParkingLotUncheckedCreateWithoutParkingLotPricesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotPricesInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingLotPricesNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotPricesInput, ParkingLotUncheckedCreateWithoutParkingLotPricesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotPricesInput
    upsert?: ParkingLotUpsertWithoutParkingLotPricesInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingLotPricesInput, ParkingLotUpdateWithoutParkingLotPricesInput>, ParkingLotUncheckedUpdateWithoutParkingLotPricesInput>
  }

  export type ParkingLotReviewCreatemediaUrlsInput = {
    set: string[]
  }

  export type ParkingLotCreateNestedOneWithoutParkingLotReviewsInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotReviewsInput, ParkingLotUncheckedCreateWithoutParkingLotReviewsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotReviewsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParkingLotReviewsInput = {
    create?: XOR<UserCreateWithoutParkingLotReviewsInput, UserUncheckedCreateWithoutParkingLotReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingLotReviewUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingLotReviewsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotReviewsInput, ParkingLotUncheckedCreateWithoutParkingLotReviewsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotReviewsInput
    upsert?: ParkingLotUpsertWithoutParkingLotReviewsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingLotReviewsInput, ParkingLotUpdateWithoutParkingLotReviewsInput>, ParkingLotUncheckedUpdateWithoutParkingLotReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutParkingLotReviewsNestedInput = {
    create?: XOR<UserCreateWithoutParkingLotReviewsInput, UserUncheckedCreateWithoutParkingLotReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotReviewsInput
    upsert?: UserUpsertWithoutParkingLotReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingLotReviewsInput, UserUpdateWithoutParkingLotReviewsInput>, UserUncheckedUpdateWithoutParkingLotReviewsInput>
  }

  export type ParkingLotServiceCreatemediaUrlsInput = {
    set: string[]
  }

  export type ParkingLotServiceCreatevehicleTypesInput = {
    set: $Enums.VEHICLE__TYPE_ALIAS[]
  }

  export type ParkingLotCreateNestedOneWithoutParkingLotServicesInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotServicesInput, ParkingLotUncheckedCreateWithoutParkingLotServicesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotServicesInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
  }

  export type ParkingLotServiceUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkingLotServiceUpdatevehicleTypesInput = {
    set?: $Enums.VEHICLE__TYPE_ALIAS[]
    push?: $Enums.VEHICLE__TYPE_ALIAS | $Enums.VEHICLE__TYPE_ALIAS[]
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingLotServicesNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingLotServicesInput, ParkingLotUncheckedCreateWithoutParkingLotServicesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingLotServicesInput
    upsert?: ParkingLotUpsertWithoutParkingLotServicesInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingLotServicesInput, ParkingLotUpdateWithoutParkingLotServicesInput>, ParkingLotUncheckedUpdateWithoutParkingLotServicesInput>
  }

  export type ReservationCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput> | ReservationCreateWithoutParkingSpotInput[] | ReservationUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingSpotInput | ReservationCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ReservationCreateManyParkingSpotInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type ParkingLotCreateNestedOneWithoutParkingSpotsInput = {
    create?: XOR<ParkingLotCreateWithoutParkingSpotsInput, ParkingLotUncheckedCreateWithoutParkingSpotsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingSpotsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type ReservationUncheckedCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput> | ReservationCreateWithoutParkingSpotInput[] | ReservationUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingSpotInput | ReservationCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ReservationCreateManyParkingSpotInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput> | ReservationCreateWithoutParkingSpotInput[] | ReservationUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingSpotInput | ReservationCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutParkingSpotInput | ReservationUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ReservationCreateManyParkingSpotInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutParkingSpotInput | ReservationUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutParkingSpotInput | ReservationUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingSpotsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingSpotsInput, ParkingLotUncheckedCreateWithoutParkingSpotsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingSpotsInput
    upsert?: ParkingLotUpsertWithoutParkingSpotsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingSpotsInput, ParkingLotUpdateWithoutParkingSpotsInput>, ParkingLotUncheckedUpdateWithoutParkingSpotsInput>
  }

  export type ReservationUncheckedUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput> | ReservationCreateWithoutParkingSpotInput[] | ReservationUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingSpotInput | ReservationCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutParkingSpotInput | ReservationUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ReservationCreateManyParkingSpotInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutParkingSpotInput | ReservationUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutParkingSpotInput | ReservationUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput> | ParkingRecordCreateWithoutParkingSpotInput[] | ParkingRecordUncheckedCreateWithoutParkingSpotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSpotInput | ParkingRecordCreateOrConnectWithoutParkingSpotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput[]
    createMany?: ParkingRecordCreateManyParkingSpotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingRecordCreateNestedOneWithoutReservationInput = {
    create?: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutReservationInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type ParkingSpotCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ParkingSpotCreateWithoutReservationsInput, ParkingSpotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutReservationsInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutReservationsInput = {
    create?: XOR<VehicleCreateWithoutReservationsInput, VehicleUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReservationsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingRecordUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutReservationInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.RESERVATION__STATUS_ALIAS
  }

  export type ParkingRecordUpdateOneWithoutReservationNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutReservationInput
    upsert?: ParkingRecordUpsertWithoutReservationInput
    disconnect?: ParkingRecordWhereInput | boolean
    delete?: ParkingRecordWhereInput | boolean
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutReservationInput, ParkingRecordUpdateWithoutReservationInput>, ParkingRecordUncheckedUpdateWithoutReservationInput>
  }

  export type ParkingSpotUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutReservationsInput, ParkingSpotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutReservationsInput
    upsert?: ParkingSpotUpsertWithoutReservationsInput
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutReservationsInput, ParkingSpotUpdateWithoutReservationsInput>, ParkingSpotUncheckedUpdateWithoutReservationsInput>
  }

  export type VehicleUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<VehicleCreateWithoutReservationsInput, VehicleUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutReservationsInput
    upsert?: VehicleUpsertWithoutReservationsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutReservationsInput, VehicleUpdateWithoutReservationsInput>, VehicleUncheckedUpdateWithoutReservationsInput>
  }

  export type ParkingRecordUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutReservationInput
    upsert?: ParkingRecordUpsertWithoutReservationInput
    disconnect?: ParkingRecordWhereInput | boolean
    delete?: ParkingRecordWhereInput | boolean
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutReservationInput, ParkingRecordUpdateWithoutReservationInput>, ParkingRecordUncheckedUpdateWithoutReservationInput>
  }

  export type VehicleCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingSpotCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingRecordsInput, ParkingSpotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingRecordsInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type ReservationCreateNestedOneWithoutParkingRecordInput = {
    create?: XOR<ReservationCreateWithoutParkingRecordInput, ReservationUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingRecordInput
    connect?: ReservationWhereUniqueInput
  }

  export type PaymentRecordCreateNestedOneWithoutParkingRecordInput = {
    create?: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutParkingRecordInput
    connect?: PaymentRecordWhereUniqueInput
  }

  export type PaymentRecordUncheckedCreateNestedOneWithoutParkingRecordInput = {
    create?: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutParkingRecordInput
    connect?: PaymentRecordWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.PARKING_RECORD__STATUS_ALIAS
  }

  export type VehicleUpdateOneWithoutParkingRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    upsert?: VehicleUpsertWithoutParkingRecordsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParkingRecordsInput, VehicleUpdateWithoutParkingRecordsInput>, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSpotUpdateOneWithoutParkingRecordsNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutParkingRecordsInput, ParkingSpotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutParkingRecordsInput
    upsert?: ParkingSpotUpsertWithoutParkingRecordsInput
    disconnect?: ParkingSpotWhereInput | boolean
    delete?: ParkingSpotWhereInput | boolean
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutParkingRecordsInput, ParkingSpotUpdateWithoutParkingRecordsInput>, ParkingSpotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ReservationUpdateOneWithoutParkingRecordNestedInput = {
    create?: XOR<ReservationCreateWithoutParkingRecordInput, ReservationUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingRecordInput
    upsert?: ReservationUpsertWithoutParkingRecordInput
    disconnect?: ReservationWhereInput | boolean
    delete?: ReservationWhereInput | boolean
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutParkingRecordInput, ReservationUpdateWithoutParkingRecordInput>, ReservationUncheckedUpdateWithoutParkingRecordInput>
  }

  export type PaymentRecordUpdateOneWithoutParkingRecordNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutParkingRecordInput
    upsert?: PaymentRecordUpsertWithoutParkingRecordInput
    disconnect?: PaymentRecordWhereInput | boolean
    delete?: PaymentRecordWhereInput | boolean
    connect?: PaymentRecordWhereUniqueInput
    update?: XOR<XOR<PaymentRecordUpdateToOneWithWhereWithoutParkingRecordInput, PaymentRecordUpdateWithoutParkingRecordInput>, PaymentRecordUncheckedUpdateWithoutParkingRecordInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentRecordUncheckedUpdateOneWithoutParkingRecordNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutParkingRecordInput
    upsert?: PaymentRecordUpsertWithoutParkingRecordInput
    disconnect?: PaymentRecordWhereInput | boolean
    delete?: PaymentRecordWhereInput | boolean
    connect?: PaymentRecordWhereUniqueInput
    update?: XOR<XOR<PaymentRecordUpdateToOneWithWhereWithoutParkingRecordInput, PaymentRecordUpdateWithoutParkingRecordInput>, PaymentRecordUncheckedUpdateWithoutParkingRecordInput>
  }

  export type UserCreateNestedOneWithoutPaymentRecordsInput = {
    create?: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingRecordCreateNestedOneWithoutPaymentRecordInput = {
    create?: XOR<ParkingRecordCreateWithoutPaymentRecordInput, ParkingRecordUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutPaymentRecordInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENT_RECORD__METHOD_ALIAS
  }

  export type UserUpdateOneRequiredWithoutPaymentRecordsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordsInput
    upsert?: UserUpsertWithoutPaymentRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentRecordsInput, UserUpdateWithoutPaymentRecordsInput>, UserUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type ParkingRecordUpdateOneRequiredWithoutPaymentRecordNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutPaymentRecordInput, ParkingRecordUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutPaymentRecordInput
    upsert?: ParkingRecordUpsertWithoutPaymentRecordInput
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutPaymentRecordInput, ParkingRecordUpdateWithoutPaymentRecordInput>, ParkingRecordUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.ACCOUNT__ROLE_ALIAS | EnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel> | $Enums.ACCOUNT__ROLE_ALIAS
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumACCOUNT__ROLE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ACCOUNT__ROLE_ALIAS | EnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.ACCOUNT__ROLE_ALIAS[] | ListEnumACCOUNT__ROLE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumACCOUNT__ROLE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.ACCOUNT__ROLE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumACCOUNT__ROLE_ALIASFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.USER__GENDER_ALIAS | EnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel> | $Enums.USER__GENDER_ALIAS
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUSER__GENDER_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER__GENDER_ALIAS | EnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER__GENDER_ALIAS[] | ListEnumUSER__GENDER_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER__GENDER_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.USER__GENDER_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel>
    _max?: NestedEnumUSER__GENDER_ALIASFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.VEHICLE__TYPE_ALIAS | EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel> | $Enums.VEHICLE__TYPE_ALIAS
  }

  export type NestedEnumVEHICLE__TYPE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VEHICLE__TYPE_ALIAS | EnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.VEHICLE__TYPE_ALIAS[] | ListEnumVEHICLE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumVEHICLE__TYPE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.VEHICLE__TYPE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumVEHICLE__TYPE_ALIASFilter<$PrismaModel>
  }

  export type NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT__STATUS_ALIAS | EnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel> | $Enums.PARKING_LOT__STATUS_ALIAS
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPARKING_LOT__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT__STATUS_ALIAS | EnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT__STATUS_ALIAS[] | ListEnumPARKING_LOT__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_LOT__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_LOT__STATUS_ALIASFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
  }

  export type NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS | EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS[] | ListEnumPARKING_LOT_SERVICE__TYPE_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<$PrismaModel>
  }

  export type NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.RESERVATION__STATUS_ALIAS | EnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel> | $Enums.RESERVATION__STATUS_ALIAS
  }

  export type NestedEnumRESERVATION__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RESERVATION__STATUS_ALIAS | EnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.RESERVATION__STATUS_ALIAS[] | ListEnumRESERVATION__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumRESERVATION__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.RESERVATION__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumRESERVATION__STATUS_ALIASFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_RECORD__STATUS_ALIAS | EnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel> | $Enums.PARKING_RECORD__STATUS_ALIAS
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPARKING_RECORD__STATUS_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PARKING_RECORD__STATUS_ALIAS | EnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PARKING_RECORD__STATUS_ALIAS[] | ListEnumPARKING_RECORD__STATUS_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPARKING_RECORD__STATUS_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PARKING_RECORD__STATUS_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPARKING_RECORD__STATUS_ALIASFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_RECORD__METHOD_ALIAS | EnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
  }

  export type NestedEnumPAYMENT_RECORD__METHOD_ALIASWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_RECORD__METHOD_ALIAS | EnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_RECORD__METHOD_ALIAS[] | ListEnumPAYMENT_RECORD__METHOD_ALIASFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_RECORD__METHOD_ALIASWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_RECORD__METHOD_ALIASFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type AccountTokenCreateWithoutAccountInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenUncheckedCreateWithoutAccountInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenCreateOrConnectWithoutAccountInput = {
    where: AccountTokenWhereUniqueInput
    create: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput>
  }

  export type AccountTokenCreateManyAccountInputEnvelope = {
    data: AccountTokenCreateManyAccountInput | AccountTokenCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountTokenUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountTokenWhereUniqueInput
    update: XOR<AccountTokenUpdateWithoutAccountInput, AccountTokenUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountTokenCreateWithoutAccountInput, AccountTokenUncheckedCreateWithoutAccountInput>
  }

  export type AccountTokenUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountTokenWhereUniqueInput
    data: XOR<AccountTokenUpdateWithoutAccountInput, AccountTokenUncheckedUpdateWithoutAccountInput>
  }

  export type AccountTokenUpdateManyWithWhereWithoutAccountInput = {
    where: AccountTokenScalarWhereInput
    data: XOR<AccountTokenUpdateManyMutationInput, AccountTokenUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountTokenScalarWhereInput = {
    AND?: AccountTokenScalarWhereInput | AccountTokenScalarWhereInput[]
    OR?: AccountTokenScalarWhereInput[]
    NOT?: AccountTokenScalarWhereInput | AccountTokenScalarWhereInput[]
    id?: IntFilter<"AccountToken"> | number
    token?: StringFilter<"AccountToken"> | string
    createdAt?: DateTimeFilter<"AccountToken"> | Date | string
    updatedAt?: DateTimeFilter<"AccountToken"> | Date | string
    accountId?: StringFilter<"AccountToken"> | string
  }

  export type AccountCreateWithoutAccountTokenInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAccountTokenInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAccountTokenInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAccountTokenInput, AccountUncheckedCreateWithoutAccountTokenInput>
  }

  export type AccountUpsertWithoutAccountTokenInput = {
    update: XOR<AccountUpdateWithoutAccountTokenInput, AccountUncheckedUpdateWithoutAccountTokenInput>
    create: XOR<AccountCreateWithoutAccountTokenInput, AccountUncheckedCreateWithoutAccountTokenInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAccountTokenInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAccountTokenInput, AccountUncheckedUpdateWithoutAccountTokenInput>
  }

  export type AccountUpdateWithoutAccountTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAccountTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type VehicleCreateWithoutOwnerInput = {
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleCreateManyOwnerInputEnvelope = {
    data: VehicleCreateManyOwnerInput | VehicleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotReviewCreateWithoutUserInput = {
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingLotReviewsInput
  }

  export type ParkingLotReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
  }

  export type ParkingLotReviewCreateOrConnectWithoutUserInput = {
    where: ParkingLotReviewWhereUniqueInput
    create: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput>
  }

  export type ParkingLotReviewCreateManyUserInputEnvelope = {
    data: ParkingLotReviewCreateManyUserInput | ParkingLotReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotCreateWithoutOwnerInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingLotCreateManyOwnerInputEnvelope = {
    data: ParkingLotCreateManyOwnerInput | ParkingLotCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutUserInput = {
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord: ParkingRecordCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateWithoutUserInput = {
    id?: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId: number
  }

  export type PaymentRecordCreateOrConnectWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput>
  }

  export type PaymentRecordCreateManyUserInputEnvelope = {
    data: PaymentRecordCreateManyUserInput | PaymentRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserNotificationCreateWithoutUserInput = {
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserNotificationCreateOrConnectWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    create: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput>
  }

  export type UserNotificationCreateManyUserInputEnvelope = {
    data: UserNotificationCreateManyUserInput | UserNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    AccountToken?: AccountTokenCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    password: string
    role: $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    AccountToken?: AccountTokenUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    type?: EnumVEHICLE__TYPE_ALIASFilter<"Vehicle"> | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    color?: StringFilter<"Vehicle"> | string
    imageUrl?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    ownerId?: IntFilter<"Vehicle"> | number
  }

  export type ParkingLotReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkingLotReviewWhereUniqueInput
    update: XOR<ParkingLotReviewUpdateWithoutUserInput, ParkingLotReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ParkingLotReviewCreateWithoutUserInput, ParkingLotReviewUncheckedCreateWithoutUserInput>
  }

  export type ParkingLotReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkingLotReviewWhereUniqueInput
    data: XOR<ParkingLotReviewUpdateWithoutUserInput, ParkingLotReviewUncheckedUpdateWithoutUserInput>
  }

  export type ParkingLotReviewUpdateManyWithWhereWithoutUserInput = {
    where: ParkingLotReviewScalarWhereInput
    data: XOR<ParkingLotReviewUpdateManyMutationInput, ParkingLotReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkingLotReviewScalarWhereInput = {
    AND?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
    OR?: ParkingLotReviewScalarWhereInput[]
    NOT?: ParkingLotReviewScalarWhereInput | ParkingLotReviewScalarWhereInput[]
    id?: IntFilter<"ParkingLotReview"> | number
    rating?: IntFilter<"ParkingLotReview"> | number
    comment?: StringFilter<"ParkingLotReview"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotReview">
    createdAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotReview"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotReview"> | number
    userId?: IntFilter<"ParkingLotReview"> | number
  }

  export type ParkingLotUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    update: XOR<ParkingLotUpdateWithoutOwnerInput, ParkingLotUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingLotCreateWithoutOwnerInput, ParkingLotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingLotUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingLotWhereUniqueInput
    data: XOR<ParkingLotUpdateWithoutOwnerInput, ParkingLotUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingLotUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingLotScalarWhereInput
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ParkingLotScalarWhereInput = {
    AND?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
    OR?: ParkingLotScalarWhereInput[]
    NOT?: ParkingLotScalarWhereInput | ParkingLotScalarWhereInput[]
    id?: IntFilter<"ParkingLot"> | number
    name?: StringFilter<"ParkingLot"> | string
    description?: StringFilter<"ParkingLot"> | string
    latitude?: FloatFilter<"ParkingLot"> | number
    longitude?: FloatFilter<"ParkingLot"> | number
    mediaUrls?: StringNullableListFilter<"ParkingLot">
    ratings?: FloatFilter<"ParkingLot"> | number
    phone?: StringFilter<"ParkingLot"> | string
    openAt?: StringFilter<"ParkingLot"> | string
    closeAt?: StringFilter<"ParkingLot"> | string
    status?: EnumPARKING_LOT__STATUS_ALIASFilter<"ParkingLot"> | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFilter<"ParkingLot"> | boolean
    approvedAt?: DateTimeNullableFilter<"ParkingLot"> | Date | string | null
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    ownerId?: IntFilter<"ParkingLot"> | number
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutUserInput, PaymentRecordUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutUserInput, PaymentRecordUncheckedUpdateWithoutUserInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutUserInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFilter<"PaymentRecord"> | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFilter<"PaymentRecord"> | number
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    userId?: IntFilter<"PaymentRecord"> | number
    parkingRecordId?: IntFilter<"PaymentRecord"> | number
  }

  export type UserNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    update: XOR<UserNotificationUpdateWithoutUserInput, UserNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<UserNotificationCreateWithoutUserInput, UserNotificationUncheckedCreateWithoutUserInput>
  }

  export type UserNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserNotificationWhereUniqueInput
    data: XOR<UserNotificationUpdateWithoutUserInput, UserNotificationUncheckedUpdateWithoutUserInput>
  }

  export type UserNotificationUpdateManyWithWhereWithoutUserInput = {
    where: UserNotificationScalarWhereInput
    data: XOR<UserNotificationUpdateManyMutationInput, UserNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserNotificationScalarWhereInput = {
    AND?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
    OR?: UserNotificationScalarWhereInput[]
    NOT?: UserNotificationScalarWhereInput | UserNotificationScalarWhereInput[]
    id?: IntFilter<"UserNotification"> | number
    title?: StringFilter<"UserNotification"> | string
    message?: StringFilter<"UserNotification"> | string
    read?: BoolFilter<"UserNotification"> | boolean
    createdAt?: DateTimeFilter<"UserNotification"> | Date | string
    updatedAt?: DateTimeFilter<"UserNotification"> | Date | string
    userId?: IntFilter<"UserNotification"> | number
  }

  export type AccountUpsertWithoutUserInput = {
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountToken?: AccountTokenUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumACCOUNT__ROLE_ALIASFieldUpdateOperationsInput | $Enums.ACCOUNT__ROLE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountToken?: AccountTokenUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type UserCreateWithoutUserNotificationsInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserNotificationsInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserNotificationsInput, UserUncheckedCreateWithoutUserNotificationsInput>
  }

  export type UserUpsertWithoutUserNotificationsInput = {
    update: XOR<UserUpdateWithoutUserNotificationsInput, UserUncheckedUpdateWithoutUserNotificationsInput>
    create: XOR<UserCreateWithoutUserNotificationsInput, UserUncheckedCreateWithoutUserNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserNotificationsInput, UserUncheckedUpdateWithoutUserNotificationsInput>
  }

  export type UserUpdateWithoutUserNotificationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationCreateWithoutVehicleInput = {
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordCreateNestedOneWithoutReservationInput
    parkingSpot: ParkingSpotCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutVehicleInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId: number
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput>
  }

  export type ReservationCreateManyVehicleInputEnvelope = {
    data: ReservationCreateManyVehicleInput | ReservationCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutVehicleInput = {
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpot?: ParkingSpotCreateNestedOneWithoutParkingRecordsInput
    reservation?: ReservationCreateNestedOneWithoutParkingRecordInput
    paymentRecord?: PaymentRecordCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutVehicleInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId?: number | null
    reservationId?: number | null
    paymentRecord?: PaymentRecordUncheckedCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordCreateManyVehicleInputEnvelope = {
    data: ParkingRecordCreateManyVehicleInput | ParkingRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutVehiclesInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVehicleInput, ReservationUncheckedUpdateWithoutVehicleInput>
    create: XOR<ReservationCreateWithoutVehicleInput, ReservationUncheckedCreateWithoutVehicleInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVehicleInput, ReservationUncheckedUpdateWithoutVehicleInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVehicleInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    checkInAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFilter<"Reservation"> | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    parkingSpotId?: IntFilter<"Reservation"> | number
    vehicleId?: IntFilter<"Reservation"> | number
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ParkingRecordScalarWhereInput = {
    AND?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    OR?: ParkingRecordScalarWhereInput[]
    NOT?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    id?: IntFilter<"ParkingRecord"> | number
    checkInAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    totalPrice?: FloatNullableFilter<"ParkingRecord"> | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFilter<"ParkingRecord"> | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    vehicleId?: IntNullableFilter<"ParkingRecord"> | number | null
    parkingSpotId?: IntNullableFilter<"ParkingRecord"> | number | null
    reservationId?: IntNullableFilter<"ParkingRecord"> | number | null
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingSpotCreateWithoutParkingLotInput = {
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutParkingSpotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSpotUncheckedCreateWithoutParkingLotInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutParkingSpotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutParkingLotInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingSpotCreateManyParkingLotInputEnvelope = {
    data: ParkingSpotCreateManyParkingLotInput | ParkingSpotCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotServiceCreateWithoutParkingLotInput = {
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotServiceUncheckedCreateWithoutParkingLotInput = {
    id?: number
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotServiceCreateOrConnectWithoutParkingLotInput = {
    where: ParkingLotServiceWhereUniqueInput
    create: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotServiceCreateManyParkingLotInputEnvelope = {
    data: ParkingLotServiceCreateManyParkingLotInput | ParkingLotServiceCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotReviewCreateWithoutParkingLotInput = {
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParkingLotReviewsInput
  }

  export type ParkingLotReviewUncheckedCreateWithoutParkingLotInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ParkingLotReviewCreateOrConnectWithoutParkingLotInput = {
    where: ParkingLotReviewWhereUniqueInput
    create: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotReviewCreateManyParkingLotInputEnvelope = {
    data: ParkingLotReviewCreateManyParkingLotInput | ParkingLotReviewCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotPriceCreateWithoutParkingLotInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
  }

  export type ParkingLotPriceUncheckedCreateWithoutParkingLotInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
  }

  export type ParkingLotPriceCreateOrConnectWithoutParkingLotInput = {
    where: ParkingLotPriceWhereUniqueInput
    create: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotPriceCreateManyParkingLotInputEnvelope = {
    data: ParkingLotPriceCreateManyParkingLotInput | ParkingLotPriceCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutParkingLotsInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingLotsInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingLotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingLotsInput, UserUncheckedCreateWithoutParkingLotsInput>
  }

  export type ParkingSpotUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingSpotWhereUniqueInput
    update: XOR<ParkingSpotUpdateWithoutParkingLotInput, ParkingSpotUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingSpotCreateWithoutParkingLotInput, ParkingSpotUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingSpotUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingSpotWhereUniqueInput
    data: XOR<ParkingSpotUpdateWithoutParkingLotInput, ParkingSpotUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingSpotUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingSpotScalarWhereInput
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingSpotScalarWhereInput = {
    AND?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    OR?: ParkingSpotScalarWhereInput[]
    NOT?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    id?: IntFilter<"ParkingSpot"> | number
    name?: StringFilter<"ParkingSpot"> | string
    isAvailable?: BoolFilter<"ParkingSpot"> | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingSpot"> | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSpot"> | Date | string
    parkingLotId?: IntFilter<"ParkingSpot"> | number
  }

  export type ParkingLotServiceUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotServiceWhereUniqueInput
    update: XOR<ParkingLotServiceUpdateWithoutParkingLotInput, ParkingLotServiceUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingLotServiceCreateWithoutParkingLotInput, ParkingLotServiceUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotServiceUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotServiceWhereUniqueInput
    data: XOR<ParkingLotServiceUpdateWithoutParkingLotInput, ParkingLotServiceUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingLotServiceUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingLotServiceScalarWhereInput
    data: XOR<ParkingLotServiceUpdateManyMutationInput, ParkingLotServiceUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingLotServiceScalarWhereInput = {
    AND?: ParkingLotServiceScalarWhereInput | ParkingLotServiceScalarWhereInput[]
    OR?: ParkingLotServiceScalarWhereInput[]
    NOT?: ParkingLotServiceScalarWhereInput | ParkingLotServiceScalarWhereInput[]
    id?: IntFilter<"ParkingLotService"> | number
    name?: StringFilter<"ParkingLotService"> | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFilter<"ParkingLotService"> | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFilter<"ParkingLotService"> | string
    mediaUrls?: StringNullableListFilter<"ParkingLotService">
    price?: FloatFilter<"ParkingLotService"> | number
    vehicleTypes?: EnumVEHICLE__TYPE_ALIASNullableListFilter<"ParkingLotService">
    createdAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLotService"> | Date | string
    parkingLotId?: IntFilter<"ParkingLotService"> | number
  }

  export type ParkingLotReviewUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotReviewWhereUniqueInput
    update: XOR<ParkingLotReviewUpdateWithoutParkingLotInput, ParkingLotReviewUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingLotReviewCreateWithoutParkingLotInput, ParkingLotReviewUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotReviewUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotReviewWhereUniqueInput
    data: XOR<ParkingLotReviewUpdateWithoutParkingLotInput, ParkingLotReviewUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingLotReviewUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingLotReviewScalarWhereInput
    data: XOR<ParkingLotReviewUpdateManyMutationInput, ParkingLotReviewUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingLotPriceUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotPriceWhereUniqueInput
    update: XOR<ParkingLotPriceUpdateWithoutParkingLotInput, ParkingLotPriceUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingLotPriceCreateWithoutParkingLotInput, ParkingLotPriceUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingLotPriceUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingLotPriceWhereUniqueInput
    data: XOR<ParkingLotPriceUpdateWithoutParkingLotInput, ParkingLotPriceUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingLotPriceUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingLotPriceScalarWhereInput
    data: XOR<ParkingLotPriceUpdateManyMutationInput, ParkingLotPriceUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingLotPriceScalarWhereInput = {
    AND?: ParkingLotPriceScalarWhereInput | ParkingLotPriceScalarWhereInput[]
    OR?: ParkingLotPriceScalarWhereInput[]
    NOT?: ParkingLotPriceScalarWhereInput | ParkingLotPriceScalarWhereInput[]
    vehicleType?: EnumVEHICLE__TYPE_ALIASFilter<"ParkingLotPrice"> | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFilter<"ParkingLotPrice"> | number
    parkingLotId?: IntFilter<"ParkingLotPrice"> | number
  }

  export type UserUpsertWithoutParkingLotsInput = {
    update: XOR<UserUpdateWithoutParkingLotsInput, UserUncheckedUpdateWithoutParkingLotsInput>
    create: XOR<UserCreateWithoutParkingLotsInput, UserUncheckedCreateWithoutParkingLotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingLotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingLotsInput, UserUncheckedUpdateWithoutParkingLotsInput>
  }

  export type UserUpdateWithoutParkingLotsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingLotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingLotCreateWithoutParkingLotPricesInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutParkingLotInput
    owner: UserCreateNestedOneWithoutParkingLotsInput
  }

  export type ParkingLotUncheckedCreateWithoutParkingLotPricesInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingSpots?: ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutParkingLotPricesInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingLotPricesInput, ParkingLotUncheckedCreateWithoutParkingLotPricesInput>
  }

  export type ParkingLotUpsertWithoutParkingLotPricesInput = {
    update: XOR<ParkingLotUpdateWithoutParkingLotPricesInput, ParkingLotUncheckedUpdateWithoutParkingLotPricesInput>
    create: XOR<ParkingLotCreateWithoutParkingLotPricesInput, ParkingLotUncheckedCreateWithoutParkingLotPricesInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingLotPricesInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingLotPricesInput, ParkingLotUncheckedUpdateWithoutParkingLotPricesInput>
  }

  export type ParkingLotUpdateWithoutParkingLotPricesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutParkingLotNestedInput
    owner?: UserUpdateOneRequiredWithoutParkingLotsNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutParkingLotPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingSpots?: ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotCreateWithoutParkingLotReviewsInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceCreateNestedManyWithoutParkingLotInput
    owner: UserCreateNestedOneWithoutParkingLotsInput
  }

  export type ParkingLotUncheckedCreateWithoutParkingLotReviewsInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingSpots?: ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotServices?: ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutParkingLotReviewsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingLotReviewsInput, ParkingLotUncheckedCreateWithoutParkingLotReviewsInput>
  }

  export type UserCreateWithoutParkingLotReviewsInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingLotReviewsInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingLotReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingLotReviewsInput, UserUncheckedCreateWithoutParkingLotReviewsInput>
  }

  export type ParkingLotUpsertWithoutParkingLotReviewsInput = {
    update: XOR<ParkingLotUpdateWithoutParkingLotReviewsInput, ParkingLotUncheckedUpdateWithoutParkingLotReviewsInput>
    create: XOR<ParkingLotCreateWithoutParkingLotReviewsInput, ParkingLotUncheckedCreateWithoutParkingLotReviewsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingLotReviewsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingLotReviewsInput, ParkingLotUncheckedUpdateWithoutParkingLotReviewsInput>
  }

  export type ParkingLotUpdateWithoutParkingLotReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUpdateManyWithoutParkingLotNestedInput
    owner?: UserUpdateOneRequiredWithoutParkingLotsNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutParkingLotReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingSpots?: ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type UserUpsertWithoutParkingLotReviewsInput = {
    update: XOR<UserUpdateWithoutParkingLotReviewsInput, UserUncheckedUpdateWithoutParkingLotReviewsInput>
    create: XOR<UserCreateWithoutParkingLotReviewsInput, UserUncheckedCreateWithoutParkingLotReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingLotReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingLotReviewsInput, UserUncheckedUpdateWithoutParkingLotReviewsInput>
  }

  export type UserUpdateWithoutParkingLotReviewsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingLotReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingLotCreateWithoutParkingLotServicesInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpots?: ParkingSpotCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceCreateNestedManyWithoutParkingLotInput
    owner: UserCreateNestedOneWithoutParkingLotsInput
  }

  export type ParkingLotUncheckedCreateWithoutParkingLotServicesInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingSpots?: ParkingSpotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutParkingLotServicesInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingLotServicesInput, ParkingLotUncheckedCreateWithoutParkingLotServicesInput>
  }

  export type ParkingLotUpsertWithoutParkingLotServicesInput = {
    update: XOR<ParkingLotUpdateWithoutParkingLotServicesInput, ParkingLotUncheckedUpdateWithoutParkingLotServicesInput>
    create: XOR<ParkingLotCreateWithoutParkingLotServicesInput, ParkingLotUncheckedCreateWithoutParkingLotServicesInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingLotServicesInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingLotServicesInput, ParkingLotUncheckedUpdateWithoutParkingLotServicesInput>
  }

  export type ParkingLotUpdateWithoutParkingLotServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUpdateManyWithoutParkingLotNestedInput
    owner?: UserUpdateOneRequiredWithoutParkingLotsNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutParkingLotServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingSpots?: ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ReservationCreateWithoutParkingSpotInput = {
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecord?: ParkingRecordCreateNestedOneWithoutReservationInput
    vehicle: VehicleCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutParkingSpotInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: number
    parkingRecord?: ParkingRecordUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutParkingSpotInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput>
  }

  export type ReservationCreateManyParkingSpotInputEnvelope = {
    data: ReservationCreateManyParkingSpotInput | ReservationCreateManyParkingSpotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutParkingSpotInput = {
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutParkingRecordsInput
    reservation?: ReservationCreateNestedOneWithoutParkingRecordInput
    paymentRecord?: PaymentRecordCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutParkingSpotInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    reservationId?: number | null
    paymentRecord?: PaymentRecordUncheckedCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput>
  }

  export type ParkingRecordCreateManyParkingSpotInputEnvelope = {
    data: ParkingRecordCreateManyParkingSpotInput | ParkingRecordCreateManyParkingSpotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotCreateWithoutParkingSpotsInput = {
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotServices?: ParkingLotServiceCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceCreateNestedManyWithoutParkingLotInput
    owner: UserCreateNestedOneWithoutParkingLotsInput
  }

  export type ParkingLotUncheckedCreateWithoutParkingSpotsInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingLotServices?: ParkingLotServiceUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutParkingLotInput
    parkingLotPrices?: ParkingLotPriceUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutParkingSpotsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingSpotsInput, ParkingLotUncheckedCreateWithoutParkingSpotsInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutParkingSpotInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutParkingSpotInput, ReservationUncheckedUpdateWithoutParkingSpotInput>
    create: XOR<ReservationCreateWithoutParkingSpotInput, ReservationUncheckedCreateWithoutParkingSpotInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutParkingSpotInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutParkingSpotInput, ReservationUncheckedUpdateWithoutParkingSpotInput>
  }

  export type ReservationUpdateManyWithWhereWithoutParkingSpotInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutParkingSpotInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutParkingSpotInput, ParkingRecordUncheckedUpdateWithoutParkingSpotInput>
    create: XOR<ParkingRecordCreateWithoutParkingSpotInput, ParkingRecordUncheckedCreateWithoutParkingSpotInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutParkingSpotInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutParkingSpotInput, ParkingRecordUncheckedUpdateWithoutParkingSpotInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutParkingSpotInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutParkingSpotInput>
  }

  export type ParkingLotUpsertWithoutParkingSpotsInput = {
    update: XOR<ParkingLotUpdateWithoutParkingSpotsInput, ParkingLotUncheckedUpdateWithoutParkingSpotsInput>
    create: XOR<ParkingLotCreateWithoutParkingSpotsInput, ParkingLotUncheckedCreateWithoutParkingSpotsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingSpotsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingSpotsInput, ParkingLotUncheckedUpdateWithoutParkingSpotsInput>
  }

  export type ParkingLotUpdateWithoutParkingSpotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotServices?: ParkingLotServiceUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUpdateManyWithoutParkingLotNestedInput
    owner?: UserUpdateOneRequiredWithoutParkingLotsNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutParkingSpotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingLotServices?: ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingRecordCreateWithoutReservationInput = {
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSpotCreateNestedOneWithoutParkingRecordsInput
    paymentRecord?: PaymentRecordCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutReservationInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    parkingSpotId?: number | null
    paymentRecord?: PaymentRecordUncheckedCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutReservationInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
  }

  export type ParkingSpotCreateWithoutReservationsInput = {
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSpotInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingSpotsInput
  }

  export type ParkingSpotUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutReservationsInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutReservationsInput, ParkingSpotUncheckedCreateWithoutReservationsInput>
  }

  export type VehicleCreateWithoutReservationsInput = {
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
    owner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutReservationsInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutReservationsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutReservationsInput, VehicleUncheckedCreateWithoutReservationsInput>
  }

  export type ParkingRecordUpsertWithoutReservationInput = {
    update: XOR<ParkingRecordUpdateWithoutReservationInput, ParkingRecordUncheckedUpdateWithoutReservationInput>
    create: XOR<ParkingRecordCreateWithoutReservationInput, ParkingRecordUncheckedCreateWithoutReservationInput>
    where?: ParkingRecordWhereInput
  }

  export type ParkingRecordUpdateToOneWithWhereWithoutReservationInput = {
    where?: ParkingRecordWhereInput
    data: XOR<ParkingRecordUpdateWithoutReservationInput, ParkingRecordUncheckedUpdateWithoutReservationInput>
  }

  export type ParkingRecordUpdateWithoutReservationInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSpotUpdateOneWithoutParkingRecordsNestedInput
    paymentRecord?: PaymentRecordUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecord?: PaymentRecordUncheckedUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingSpotUpsertWithoutReservationsInput = {
    update: XOR<ParkingSpotUpdateWithoutReservationsInput, ParkingSpotUncheckedUpdateWithoutReservationsInput>
    create: XOR<ParkingSpotCreateWithoutReservationsInput, ParkingSpotUncheckedCreateWithoutReservationsInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutReservationsInput, ParkingSpotUncheckedUpdateWithoutReservationsInput>
  }

  export type ParkingSpotUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingSpotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type VehicleUpsertWithoutReservationsInput = {
    update: XOR<VehicleUpdateWithoutReservationsInput, VehicleUncheckedUpdateWithoutReservationsInput>
    create: XOR<VehicleCreateWithoutReservationsInput, VehicleUncheckedCreateWithoutReservationsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutReservationsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutReservationsInput, VehicleUncheckedUpdateWithoutReservationsInput>
  }

  export type VehicleUpdateWithoutReservationsInput = {
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutParkingRecordsInput = {
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVehicleInput
    owner: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutParkingRecordsInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutParkingRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ParkingSpotCreateWithoutParkingRecordsInput = {
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutParkingSpotInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingSpotsInput
  }

  export type ParkingSpotUncheckedCreateWithoutParkingRecordsInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutParkingSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutParkingRecordsInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutParkingRecordsInput, ParkingSpotUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ReservationCreateWithoutParkingRecordInput = {
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpot: ParkingSpotCreateNestedOneWithoutReservationsInput
    vehicle: VehicleCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutParkingRecordInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId: number
    vehicleId: number
  }

  export type ReservationCreateOrConnectWithoutParkingRecordInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutParkingRecordInput, ReservationUncheckedCreateWithoutParkingRecordInput>
  }

  export type PaymentRecordCreateWithoutParkingRecordInput = {
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateWithoutParkingRecordInput = {
    id?: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type PaymentRecordCreateOrConnectWithoutParkingRecordInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
  }

  export type VehicleUpsertWithoutParkingRecordsInput = {
    update: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type VehicleUpdateWithoutParkingRecordsInput = {
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVehicleNestedInput
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutParkingRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ParkingSpotUpsertWithoutParkingRecordsInput = {
    update: XOR<ParkingSpotUpdateWithoutParkingRecordsInput, ParkingSpotUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<ParkingSpotCreateWithoutParkingRecordsInput, ParkingSpotUncheckedCreateWithoutParkingRecordsInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutParkingRecordsInput, ParkingSpotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSpotUpdateWithoutParkingRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutParkingSpotNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingSpotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutParkingRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type ReservationUpsertWithoutParkingRecordInput = {
    update: XOR<ReservationUpdateWithoutParkingRecordInput, ReservationUncheckedUpdateWithoutParkingRecordInput>
    create: XOR<ReservationCreateWithoutParkingRecordInput, ReservationUncheckedCreateWithoutParkingRecordInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutParkingRecordInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutParkingRecordInput, ReservationUncheckedUpdateWithoutParkingRecordInput>
  }

  export type ReservationUpdateWithoutParkingRecordInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpot?: ParkingSpotUpdateOneRequiredWithoutReservationsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutParkingRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordUpsertWithoutParkingRecordInput = {
    update: XOR<PaymentRecordUpdateWithoutParkingRecordInput, PaymentRecordUncheckedUpdateWithoutParkingRecordInput>
    create: XOR<PaymentRecordCreateWithoutParkingRecordInput, PaymentRecordUncheckedCreateWithoutParkingRecordInput>
    where?: PaymentRecordWhereInput
  }

  export type PaymentRecordUpdateToOneWithWhereWithoutParkingRecordInput = {
    where?: PaymentRecordWhereInput
    data: XOR<PaymentRecordUpdateWithoutParkingRecordInput, PaymentRecordUncheckedUpdateWithoutParkingRecordInput>
  }

  export type PaymentRecordUpdateWithoutParkingRecordInput = {
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutParkingRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPaymentRecordsInput = {
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotCreateNestedManyWithoutOwnerInput
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentRecordsInput = {
    id?: number
    firstName: string
    lastName: string
    phone: string
    avatarUrl?: string | null
    gender: $Enums.USER__GENDER_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    parkingLotReviews?: ParkingLotReviewUncheckedCreateNestedManyWithoutUserInput
    parkingLots?: ParkingLotUncheckedCreateNestedManyWithoutOwnerInput
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
  }

  export type ParkingRecordCreateWithoutPaymentRecordInput = {
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingSpot?: ParkingSpotCreateNestedOneWithoutParkingRecordsInput
    reservation?: ReservationCreateNestedOneWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutPaymentRecordInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    parkingSpotId?: number | null
    reservationId?: number | null
  }

  export type ParkingRecordCreateOrConnectWithoutPaymentRecordInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutPaymentRecordInput, ParkingRecordUncheckedCreateWithoutPaymentRecordInput>
  }

  export type UserUpsertWithoutPaymentRecordsInput = {
    update: XOR<UserUpdateWithoutPaymentRecordsInput, UserUncheckedUpdateWithoutPaymentRecordsInput>
    create: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentRecordsInput, UserUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type UserUpdateWithoutPaymentRecordsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUpdateManyWithoutOwnerNestedInput
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumUSER__GENDER_ALIASFieldUpdateOperationsInput | $Enums.USER__GENDER_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutUserNestedInput
    parkingLots?: ParkingLotUncheckedUpdateManyWithoutOwnerNestedInput
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingRecordUpsertWithoutPaymentRecordInput = {
    update: XOR<ParkingRecordUpdateWithoutPaymentRecordInput, ParkingRecordUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<ParkingRecordCreateWithoutPaymentRecordInput, ParkingRecordUncheckedCreateWithoutPaymentRecordInput>
    where?: ParkingRecordWhereInput
  }

  export type ParkingRecordUpdateToOneWithWhereWithoutPaymentRecordInput = {
    where?: ParkingRecordWhereInput
    data: XOR<ParkingRecordUpdateWithoutPaymentRecordInput, ParkingRecordUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type ParkingRecordUpdateWithoutPaymentRecordInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutParkingRecordsNestedInput
    parkingSpot?: ParkingSpotUpdateOneWithoutParkingRecordsNestedInput
    reservation?: ReservationUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutPaymentRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountTokenCreateManyAccountInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenUpdateWithoutAccountInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyOwnerInput = {
    id?: number
    type: $Enums.VEHICLE__TYPE_ALIAS
    plate: string
    brand: string
    model: string
    color: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotReviewCreateManyUserInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotId: number
  }

  export type ParkingLotCreateManyOwnerInput = {
    id?: number
    name: string
    description?: string
    latitude: number
    longitude: number
    mediaUrls?: ParkingLotCreatemediaUrlsInput | string[]
    ratings?: number
    phone: string
    openAt: string
    closeAt: string
    status: $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: boolean
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRecordCreateManyUserInput = {
    id?: number
    method: $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId: number
  }

  export type UserNotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateWithoutOwnerInput = {
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingLotReviewsNestedInput
  }

  export type ParkingLotReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpots?: ParkingSpotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotServices?: ParkingLotServiceUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotReviews?: ParkingLotReviewUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingLotPrices?: ParkingLotPriceUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    mediaUrls?: ParkingLotUpdatemediaUrlsInput | string[]
    ratings?: FloatFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    openAt?: StringFieldUpdateOperationsInput | string
    closeAt?: StringFieldUpdateOperationsInput | string
    status?: EnumPARKING_LOT__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT__STATUS_ALIAS
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUpdateWithoutUserInput = {
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPAYMENT_RECORD__METHOD_ALIASFieldUpdateOperationsInput | $Enums.PAYMENT_RECORD__METHOD_ALIAS
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: IntFieldUpdateOperationsInput | number
  }

  export type UserNotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyVehicleInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId: number
  }

  export type ParkingRecordCreateManyVehicleInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingSpotId?: number | null
    reservationId?: number | null
  }

  export type ReservationUpdateWithoutVehicleInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUpdateOneWithoutReservationNestedInput
    parkingSpot?: ParkingSpotUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: IntFieldUpdateOperationsInput | number
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingRecordUpdateWithoutVehicleInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpot?: ParkingSpotUpdateOneWithoutParkingRecordsNestedInput
    reservation?: ReservationUpdateOneWithoutParkingRecordNestedInput
    paymentRecord?: PaymentRecordUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecord?: PaymentRecordUncheckedUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingSpotId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ParkingSpotCreateManyParkingLotInput = {
    id?: number
    name: string
    isAvailable?: boolean
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotServiceCreateManyParkingLotInput = {
    id?: number
    name: string
    type: $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description: string
    mediaUrls?: ParkingLotServiceCreatemediaUrlsInput | string[]
    price: number
    vehicleTypes?: ParkingLotServiceCreatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotReviewCreateManyParkingLotInput = {
    id?: number
    rating: number
    comment: string
    mediaUrls?: ParkingLotReviewCreatemediaUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ParkingLotPriceCreateManyParkingLotInput = {
    vehicleType: $Enums.VEHICLE__TYPE_ALIAS
    price: number
  }

  export type ParkingSpotUpdateWithoutParkingLotInput = {
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutParkingSpotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutParkingSpotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateManyWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotServiceUpdateWithoutParkingLotInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotServiceUncheckedUpdateWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotServiceUncheckedUpdateManyWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPARKING_LOT_SERVICE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.PARKING_LOT_SERVICE__TYPE_ALIAS
    description?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotServiceUpdatemediaUrlsInput | string[]
    price?: FloatFieldUpdateOperationsInput | number
    vehicleTypes?: ParkingLotServiceUpdatevehicleTypesInput | $Enums.VEHICLE__TYPE_ALIAS[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotReviewUpdateWithoutParkingLotInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParkingLotReviewsNestedInput
  }

  export type ParkingLotReviewUncheckedUpdateWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotReviewUncheckedUpdateManyWithoutParkingLotInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    mediaUrls?: ParkingLotReviewUpdatemediaUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceUpdateWithoutParkingLotInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceUncheckedUpdateWithoutParkingLotInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ParkingLotPriceUncheckedUpdateManyWithoutParkingLotInput = {
    vehicleType?: EnumVEHICLE__TYPE_ALIASFieldUpdateOperationsInput | $Enums.VEHICLE__TYPE_ALIAS
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyParkingSpotInput = {
    id?: number
    checkInAt: Date | string
    status: $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId: number
  }

  export type ParkingRecordCreateManyParkingSpotInput = {
    id?: number
    checkInAt: Date | string
    checkOutAt?: Date | string | null
    totalPrice?: number | null
    status: $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleId?: number | null
    reservationId?: number | null
  }

  export type ReservationUpdateWithoutParkingSpotInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecord?: ParkingRecordUpdateOneWithoutReservationNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutParkingSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    parkingRecord?: ParkingRecordUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutParkingSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRESERVATION__STATUS_ALIASFieldUpdateOperationsInput | $Enums.RESERVATION__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: IntFieldUpdateOperationsInput | number
  }

  export type ParkingRecordUpdateWithoutParkingSpotInput = {
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutParkingRecordsNestedInput
    reservation?: ReservationUpdateOneWithoutParkingRecordNestedInput
    paymentRecord?: PaymentRecordUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutParkingSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentRecord?: PaymentRecordUncheckedUpdateOneWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumPARKING_RECORD__STATUS_ALIASFieldUpdateOperationsInput | $Enums.PARKING_RECORD__STATUS_ALIAS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingLotCountOutputTypeDefaultArgs instead
     */
    export type ParkingLotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingSpotCountOutputTypeDefaultArgs instead
     */
    export type ParkingSpotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountTokenDefaultArgs instead
     */
    export type AccountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserNotificationDefaultArgs instead
     */
    export type UserNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserNotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingLotDefaultArgs instead
     */
    export type ParkingLotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingLotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingLotPriceDefaultArgs instead
     */
    export type ParkingLotPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingLotPriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingLotReviewDefaultArgs instead
     */
    export type ParkingLotReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingLotReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingLotServiceDefaultArgs instead
     */
    export type ParkingLotServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingLotServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingSpotDefaultArgs instead
     */
    export type ParkingSpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingSpotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingRecordDefaultArgs instead
     */
    export type ParkingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentRecordDefaultArgs instead
     */
    export type PaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentRecordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}