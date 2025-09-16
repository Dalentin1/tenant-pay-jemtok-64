
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SharedBill
 * 
 */
export type SharedBill = $Result.DefaultSelection<Prisma.$SharedBillPayload>
/**
 * Model AllocatedBill
 * 
 */
export type AllocatedBill = $Result.DefaultSelection<Prisma.$AllocatedBillPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Delegate
 * 
 */
export type Delegate = $Result.DefaultSelection<Prisma.$DelegatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedBill`: Exposes CRUD operations for the **SharedBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedBills
    * const sharedBills = await prisma.sharedBill.findMany()
    * ```
    */
  get sharedBill(): Prisma.SharedBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allocatedBill`: Exposes CRUD operations for the **AllocatedBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllocatedBills
    * const allocatedBills = await prisma.allocatedBill.findMany()
    * ```
    */
  get allocatedBill(): Prisma.AllocatedBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delegate`: Exposes CRUD operations for the **Delegate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Delegates
    * const delegates = await prisma.delegate.findMany()
    * ```
    */
  get delegate(): Prisma.DelegateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Tenant: 'Tenant',
    Bill: 'Bill',
    Payment: 'Payment',
    SharedBill: 'SharedBill',
    AllocatedBill: 'AllocatedBill',
    Announcement: 'Announcement',
    Delegate: 'Delegate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "bill" | "payment" | "sharedBill" | "allocatedBill" | "announcement" | "delegate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SharedBill: {
        payload: Prisma.$SharedBillPayload<ExtArgs>
        fields: Prisma.SharedBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          findFirst: {
            args: Prisma.SharedBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          findMany: {
            args: Prisma.SharedBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>[]
          }
          create: {
            args: Prisma.SharedBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          createMany: {
            args: Prisma.SharedBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>[]
          }
          delete: {
            args: Prisma.SharedBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          update: {
            args: Prisma.SharedBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          deleteMany: {
            args: Prisma.SharedBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>[]
          }
          upsert: {
            args: Prisma.SharedBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedBillPayload>
          }
          aggregate: {
            args: Prisma.SharedBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedBill>
          }
          groupBy: {
            args: Prisma.SharedBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedBillCountArgs<ExtArgs>
            result: $Utils.Optional<SharedBillCountAggregateOutputType> | number
          }
        }
      }
      AllocatedBill: {
        payload: Prisma.$AllocatedBillPayload<ExtArgs>
        fields: Prisma.AllocatedBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllocatedBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllocatedBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          findFirst: {
            args: Prisma.AllocatedBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllocatedBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          findMany: {
            args: Prisma.AllocatedBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>[]
          }
          create: {
            args: Prisma.AllocatedBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          createMany: {
            args: Prisma.AllocatedBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllocatedBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>[]
          }
          delete: {
            args: Prisma.AllocatedBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          update: {
            args: Prisma.AllocatedBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          deleteMany: {
            args: Prisma.AllocatedBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllocatedBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllocatedBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>[]
          }
          upsert: {
            args: Prisma.AllocatedBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedBillPayload>
          }
          aggregate: {
            args: Prisma.AllocatedBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllocatedBill>
          }
          groupBy: {
            args: Prisma.AllocatedBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllocatedBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllocatedBillCountArgs<ExtArgs>
            result: $Utils.Optional<AllocatedBillCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Delegate: {
        payload: Prisma.$DelegatePayload<ExtArgs>
        fields: Prisma.DelegateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          findFirst: {
            args: Prisma.DelegateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          findMany: {
            args: Prisma.DelegateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>[]
          }
          create: {
            args: Prisma.DelegateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          createMany: {
            args: Prisma.DelegateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DelegateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>[]
          }
          delete: {
            args: Prisma.DelegateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          update: {
            args: Prisma.DelegateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          deleteMany: {
            args: Prisma.DelegateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DelegateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>[]
          }
          upsert: {
            args: Prisma.DelegateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          aggregate: {
            args: Prisma.DelegateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegate>
          }
          groupBy: {
            args: Prisma.DelegateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DelegateCountArgs<ExtArgs>
            result: $Utils.Optional<DelegateCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    bill?: BillOmit
    payment?: PaymentOmit
    sharedBill?: SharedBillOmit
    allocatedBill?: AllocatedBillOmit
    announcement?: AnnouncementOmit
    delegate?: DelegateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    bills: number
    payments: number
    delegations: number
    allocatedBills: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | TenantCountOutputTypeCountBillsArgs
    payments?: boolean | TenantCountOutputTypeCountPaymentsArgs
    delegations?: boolean | TenantCountOutputTypeCountDelegationsArgs
    allocatedBills?: boolean | TenantCountOutputTypeCountAllocatedBillsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDelegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegateWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAllocatedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocatedBillWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    payments: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BillCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type SharedBillCountOutputType
   */

  export type SharedBillCountOutputType = {
    allocatedBills: number
  }

  export type SharedBillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocatedBills?: boolean | SharedBillCountOutputTypeCountAllocatedBillsArgs
  }

  // Custom InputTypes
  /**
   * SharedBillCountOutputType without action
   */
  export type SharedBillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBillCountOutputType
     */
    select?: SharedBillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SharedBillCountOutputType without action
   */
  export type SharedBillCountOutputTypeCountAllocatedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocatedBillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    propertyAddress: string | null
    imageUrl: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    propertyAddress: string | null
    imageUrl: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    propertyAddress: number
    imageUrl: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    propertyAddress?: true
    imageUrl?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    propertyAddress?: true
    imageUrl?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    propertyAddress?: true
    imageUrl?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    propertyAddress: string
    imageUrl: string | null
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyAddress?: boolean
    imageUrl?: boolean
    bills?: boolean | Tenant$billsArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    delegations?: boolean | Tenant$delegationsArgs<ExtArgs>
    allocatedBills?: boolean | Tenant$allocatedBillsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyAddress?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyAddress?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    propertyAddress?: boolean
    imageUrl?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyAddress" | "imageUrl", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | Tenant$billsArgs<ExtArgs>
    payments?: boolean | Tenant$paymentsArgs<ExtArgs>
    delegations?: boolean | Tenant$delegationsArgs<ExtArgs>
    allocatedBills?: boolean | Tenant$allocatedBillsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      bills: Prisma.$BillPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      delegations: Prisma.$DelegatePayload<ExtArgs>[]
      allocatedBills: Prisma.$AllocatedBillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      propertyAddress: string
      imageUrl: string | null
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bills<T extends Tenant$billsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Tenant$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    delegations<T extends Tenant$delegationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$delegationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    allocatedBills<T extends Tenant$allocatedBillsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$allocatedBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly propertyAddress: FieldRef<"Tenant", 'String'>
    readonly imageUrl: FieldRef<"Tenant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.bills
   */
  export type Tenant$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Tenant.payments
   */
  export type Tenant$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Tenant.delegations
   */
  export type Tenant$delegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    where?: DelegateWhereInput
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    cursor?: DelegateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Tenant.allocatedBills
   */
  export type Tenant$allocatedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    where?: AllocatedBillWhereInput
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    cursor?: AllocatedBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllocatedBillScalarFieldEnum | AllocatedBillScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    amount: number | null
    carriedOverAmount: number | null
  }

  export type BillSumAggregateOutputType = {
    amount: number | null
    carriedOverAmount: number | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    amount: number | null
    month: string | null
    status: string | null
    dueDate: Date | null
    carriedOverAmount: number | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    amount: number | null
    month: string | null
    status: string | null
    dueDate: Date | null
    carriedOverAmount: number | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    tenantId: number
    amount: number
    month: number
    status: number
    dueDate: number
    carriedOverAmount: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    amount?: true
    carriedOverAmount?: true
  }

  export type BillSumAggregateInputType = {
    amount?: true
    carriedOverAmount?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    month?: true
    status?: true
    dueDate?: true
    carriedOverAmount?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    month?: true
    status?: true
    dueDate?: true
    carriedOverAmount?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    tenantId?: true
    amount?: true
    month?: true
    status?: true
    dueDate?: true
    carriedOverAmount?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    tenantId: string
    amount: number
    month: string
    status: string
    dueDate: Date
    carriedOverAmount: number | null
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    month?: boolean
    status?: boolean
    dueDate?: boolean
    carriedOverAmount?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    month?: boolean
    status?: boolean
    dueDate?: boolean
    carriedOverAmount?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    month?: boolean
    status?: boolean
    dueDate?: boolean
    carriedOverAmount?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    tenantId?: boolean
    amount?: boolean
    month?: boolean
    status?: boolean
    dueDate?: boolean
    carriedOverAmount?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "amount" | "month" | "status" | "dueDate" | "carriedOverAmount", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      amount: number
      month: string
      status: string
      dueDate: Date
      carriedOverAmount: number | null
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Bill$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly tenantId: FieldRef<"Bill", 'String'>
    readonly amount: FieldRef<"Bill", 'Float'>
    readonly month: FieldRef<"Bill", 'String'>
    readonly status: FieldRef<"Bill", 'String'>
    readonly dueDate: FieldRef<"Bill", 'DateTime'>
    readonly carriedOverAmount: FieldRef<"Bill", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill.payments
   */
  export type Bill$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    billId: string | null
    amount: number | null
    paymentDate: Date | null
    receiptId: string | null
    receiptText: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    billId: string | null
    amount: number | null
    paymentDate: Date | null
    receiptId: string | null
    receiptText: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    tenantId: number
    billId: number
    amount: number
    paymentDate: number
    receiptId: number
    receiptText: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    tenantId?: true
    billId?: true
    amount?: true
    paymentDate?: true
    receiptId?: true
    receiptText?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    billId?: true
    amount?: true
    paymentDate?: true
    receiptId?: true
    receiptText?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    tenantId?: true
    billId?: true
    amount?: true
    paymentDate?: true
    receiptId?: true
    receiptText?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    tenantId: string
    billId: string
    amount: number
    paymentDate: Date
    receiptId: string
    receiptText: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptId?: boolean
    receiptText?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptId?: boolean
    receiptText?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptId?: boolean
    receiptText?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptId?: boolean
    receiptText?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "billId" | "amount" | "paymentDate" | "receiptId" | "receiptText", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      billId: string
      amount: number
      paymentDate: Date
      receiptId: string
      receiptText: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly billId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly receiptId: FieldRef<"Payment", 'String'>
    readonly receiptText: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SharedBill
   */

  export type AggregateSharedBill = {
    _count: SharedBillCountAggregateOutputType | null
    _avg: SharedBillAvgAggregateOutputType | null
    _sum: SharedBillSumAggregateOutputType | null
    _min: SharedBillMinAggregateOutputType | null
    _max: SharedBillMaxAggregateOutputType | null
  }

  export type SharedBillAvgAggregateOutputType = {
    amount: number | null
  }

  export type SharedBillSumAggregateOutputType = {
    amount: number | null
  }

  export type SharedBillMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    date: Date | null
  }

  export type SharedBillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    date: Date | null
  }

  export type SharedBillCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    date: number
    _all: number
  }


  export type SharedBillAvgAggregateInputType = {
    amount?: true
  }

  export type SharedBillSumAggregateInputType = {
    amount?: true
  }

  export type SharedBillMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    date?: true
  }

  export type SharedBillMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    date?: true
  }

  export type SharedBillCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    date?: true
    _all?: true
  }

  export type SharedBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedBill to aggregate.
     */
    where?: SharedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedBills to fetch.
     */
    orderBy?: SharedBillOrderByWithRelationInput | SharedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedBills
    **/
    _count?: true | SharedBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedBillMaxAggregateInputType
  }

  export type GetSharedBillAggregateType<T extends SharedBillAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedBill[P]>
      : GetScalarType<T[P], AggregateSharedBill[P]>
  }




  export type SharedBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedBillWhereInput
    orderBy?: SharedBillOrderByWithAggregationInput | SharedBillOrderByWithAggregationInput[]
    by: SharedBillScalarFieldEnum[] | SharedBillScalarFieldEnum
    having?: SharedBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedBillCountAggregateInputType | true
    _avg?: SharedBillAvgAggregateInputType
    _sum?: SharedBillSumAggregateInputType
    _min?: SharedBillMinAggregateInputType
    _max?: SharedBillMaxAggregateInputType
  }

  export type SharedBillGroupByOutputType = {
    id: string
    name: string
    amount: number
    date: Date
    _count: SharedBillCountAggregateOutputType | null
    _avg: SharedBillAvgAggregateOutputType | null
    _sum: SharedBillSumAggregateOutputType | null
    _min: SharedBillMinAggregateOutputType | null
    _max: SharedBillMaxAggregateOutputType | null
  }

  type GetSharedBillGroupByPayload<T extends SharedBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedBillGroupByOutputType[P]>
            : GetScalarType<T[P], SharedBillGroupByOutputType[P]>
        }
      >
    >


  export type SharedBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    date?: boolean
    allocatedBills?: boolean | SharedBill$allocatedBillsArgs<ExtArgs>
    _count?: boolean | SharedBillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedBill"]>

  export type SharedBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    date?: boolean
  }, ExtArgs["result"]["sharedBill"]>

  export type SharedBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    date?: boolean
  }, ExtArgs["result"]["sharedBill"]>

  export type SharedBillSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    date?: boolean
  }

  export type SharedBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "date", ExtArgs["result"]["sharedBill"]>
  export type SharedBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocatedBills?: boolean | SharedBill$allocatedBillsArgs<ExtArgs>
    _count?: boolean | SharedBillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SharedBillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SharedBillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SharedBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedBill"
    objects: {
      allocatedBills: Prisma.$AllocatedBillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      date: Date
    }, ExtArgs["result"]["sharedBill"]>
    composites: {}
  }

  type SharedBillGetPayload<S extends boolean | null | undefined | SharedBillDefaultArgs> = $Result.GetResult<Prisma.$SharedBillPayload, S>

  type SharedBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedBillCountAggregateInputType | true
    }

  export interface SharedBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedBill'], meta: { name: 'SharedBill' } }
    /**
     * Find zero or one SharedBill that matches the filter.
     * @param {SharedBillFindUniqueArgs} args - Arguments to find a SharedBill
     * @example
     * // Get one SharedBill
     * const sharedBill = await prisma.sharedBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedBillFindUniqueArgs>(args: SelectSubset<T, SharedBillFindUniqueArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedBillFindUniqueOrThrowArgs} args - Arguments to find a SharedBill
     * @example
     * // Get one SharedBill
     * const sharedBill = await prisma.sharedBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedBillFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillFindFirstArgs} args - Arguments to find a SharedBill
     * @example
     * // Get one SharedBill
     * const sharedBill = await prisma.sharedBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedBillFindFirstArgs>(args?: SelectSubset<T, SharedBillFindFirstArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillFindFirstOrThrowArgs} args - Arguments to find a SharedBill
     * @example
     * // Get one SharedBill
     * const sharedBill = await prisma.sharedBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedBillFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedBills
     * const sharedBills = await prisma.sharedBill.findMany()
     * 
     * // Get first 10 SharedBills
     * const sharedBills = await prisma.sharedBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedBillWithIdOnly = await prisma.sharedBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedBillFindManyArgs>(args?: SelectSubset<T, SharedBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedBill.
     * @param {SharedBillCreateArgs} args - Arguments to create a SharedBill.
     * @example
     * // Create one SharedBill
     * const SharedBill = await prisma.sharedBill.create({
     *   data: {
     *     // ... data to create a SharedBill
     *   }
     * })
     * 
     */
    create<T extends SharedBillCreateArgs>(args: SelectSubset<T, SharedBillCreateArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedBills.
     * @param {SharedBillCreateManyArgs} args - Arguments to create many SharedBills.
     * @example
     * // Create many SharedBills
     * const sharedBill = await prisma.sharedBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedBillCreateManyArgs>(args?: SelectSubset<T, SharedBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedBills and returns the data saved in the database.
     * @param {SharedBillCreateManyAndReturnArgs} args - Arguments to create many SharedBills.
     * @example
     * // Create many SharedBills
     * const sharedBill = await prisma.sharedBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedBills and only return the `id`
     * const sharedBillWithIdOnly = await prisma.sharedBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedBillCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedBill.
     * @param {SharedBillDeleteArgs} args - Arguments to delete one SharedBill.
     * @example
     * // Delete one SharedBill
     * const SharedBill = await prisma.sharedBill.delete({
     *   where: {
     *     // ... filter to delete one SharedBill
     *   }
     * })
     * 
     */
    delete<T extends SharedBillDeleteArgs>(args: SelectSubset<T, SharedBillDeleteArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedBill.
     * @param {SharedBillUpdateArgs} args - Arguments to update one SharedBill.
     * @example
     * // Update one SharedBill
     * const sharedBill = await prisma.sharedBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedBillUpdateArgs>(args: SelectSubset<T, SharedBillUpdateArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedBills.
     * @param {SharedBillDeleteManyArgs} args - Arguments to filter SharedBills to delete.
     * @example
     * // Delete a few SharedBills
     * const { count } = await prisma.sharedBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedBillDeleteManyArgs>(args?: SelectSubset<T, SharedBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedBills
     * const sharedBill = await prisma.sharedBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedBillUpdateManyArgs>(args: SelectSubset<T, SharedBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedBills and returns the data updated in the database.
     * @param {SharedBillUpdateManyAndReturnArgs} args - Arguments to update many SharedBills.
     * @example
     * // Update many SharedBills
     * const sharedBill = await prisma.sharedBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedBills and only return the `id`
     * const sharedBillWithIdOnly = await prisma.sharedBill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SharedBillUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedBill.
     * @param {SharedBillUpsertArgs} args - Arguments to update or create a SharedBill.
     * @example
     * // Update or create a SharedBill
     * const sharedBill = await prisma.sharedBill.upsert({
     *   create: {
     *     // ... data to create a SharedBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedBill we want to update
     *   }
     * })
     */
    upsert<T extends SharedBillUpsertArgs>(args: SelectSubset<T, SharedBillUpsertArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillCountArgs} args - Arguments to filter SharedBills to count.
     * @example
     * // Count the number of SharedBills
     * const count = await prisma.sharedBill.count({
     *   where: {
     *     // ... the filter for the SharedBills we want to count
     *   }
     * })
    **/
    count<T extends SharedBillCountArgs>(
      args?: Subset<T, SharedBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedBillAggregateArgs>(args: Subset<T, SharedBillAggregateArgs>): Prisma.PrismaPromise<GetSharedBillAggregateType<T>>

    /**
     * Group by SharedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBillGroupByArgs} args - Group by arguments.
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
      T extends SharedBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedBillGroupByArgs['orderBy'] }
        : { orderBy?: SharedBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedBill model
   */
  readonly fields: SharedBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allocatedBills<T extends SharedBill$allocatedBillsArgs<ExtArgs> = {}>(args?: Subset<T, SharedBill$allocatedBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SharedBill model
   */
  interface SharedBillFieldRefs {
    readonly id: FieldRef<"SharedBill", 'String'>
    readonly name: FieldRef<"SharedBill", 'String'>
    readonly amount: FieldRef<"SharedBill", 'Float'>
    readonly date: FieldRef<"SharedBill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedBill findUnique
   */
  export type SharedBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter, which SharedBill to fetch.
     */
    where: SharedBillWhereUniqueInput
  }

  /**
   * SharedBill findUniqueOrThrow
   */
  export type SharedBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter, which SharedBill to fetch.
     */
    where: SharedBillWhereUniqueInput
  }

  /**
   * SharedBill findFirst
   */
  export type SharedBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter, which SharedBill to fetch.
     */
    where?: SharedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedBills to fetch.
     */
    orderBy?: SharedBillOrderByWithRelationInput | SharedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedBills.
     */
    cursor?: SharedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedBills.
     */
    distinct?: SharedBillScalarFieldEnum | SharedBillScalarFieldEnum[]
  }

  /**
   * SharedBill findFirstOrThrow
   */
  export type SharedBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter, which SharedBill to fetch.
     */
    where?: SharedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedBills to fetch.
     */
    orderBy?: SharedBillOrderByWithRelationInput | SharedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedBills.
     */
    cursor?: SharedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedBills.
     */
    distinct?: SharedBillScalarFieldEnum | SharedBillScalarFieldEnum[]
  }

  /**
   * SharedBill findMany
   */
  export type SharedBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter, which SharedBills to fetch.
     */
    where?: SharedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedBills to fetch.
     */
    orderBy?: SharedBillOrderByWithRelationInput | SharedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedBills.
     */
    cursor?: SharedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedBills.
     */
    skip?: number
    distinct?: SharedBillScalarFieldEnum | SharedBillScalarFieldEnum[]
  }

  /**
   * SharedBill create
   */
  export type SharedBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedBill.
     */
    data: XOR<SharedBillCreateInput, SharedBillUncheckedCreateInput>
  }

  /**
   * SharedBill createMany
   */
  export type SharedBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedBills.
     */
    data: SharedBillCreateManyInput | SharedBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedBill createManyAndReturn
   */
  export type SharedBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * The data used to create many SharedBills.
     */
    data: SharedBillCreateManyInput | SharedBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedBill update
   */
  export type SharedBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedBill.
     */
    data: XOR<SharedBillUpdateInput, SharedBillUncheckedUpdateInput>
    /**
     * Choose, which SharedBill to update.
     */
    where: SharedBillWhereUniqueInput
  }

  /**
   * SharedBill updateMany
   */
  export type SharedBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedBills.
     */
    data: XOR<SharedBillUpdateManyMutationInput, SharedBillUncheckedUpdateManyInput>
    /**
     * Filter which SharedBills to update
     */
    where?: SharedBillWhereInput
    /**
     * Limit how many SharedBills to update.
     */
    limit?: number
  }

  /**
   * SharedBill updateManyAndReturn
   */
  export type SharedBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * The data used to update SharedBills.
     */
    data: XOR<SharedBillUpdateManyMutationInput, SharedBillUncheckedUpdateManyInput>
    /**
     * Filter which SharedBills to update
     */
    where?: SharedBillWhereInput
    /**
     * Limit how many SharedBills to update.
     */
    limit?: number
  }

  /**
   * SharedBill upsert
   */
  export type SharedBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedBill to update in case it exists.
     */
    where: SharedBillWhereUniqueInput
    /**
     * In case the SharedBill found by the `where` argument doesn't exist, create a new SharedBill with this data.
     */
    create: XOR<SharedBillCreateInput, SharedBillUncheckedCreateInput>
    /**
     * In case the SharedBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedBillUpdateInput, SharedBillUncheckedUpdateInput>
  }

  /**
   * SharedBill delete
   */
  export type SharedBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
    /**
     * Filter which SharedBill to delete.
     */
    where: SharedBillWhereUniqueInput
  }

  /**
   * SharedBill deleteMany
   */
  export type SharedBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedBills to delete
     */
    where?: SharedBillWhereInput
    /**
     * Limit how many SharedBills to delete.
     */
    limit?: number
  }

  /**
   * SharedBill.allocatedBills
   */
  export type SharedBill$allocatedBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    where?: AllocatedBillWhereInput
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    cursor?: AllocatedBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllocatedBillScalarFieldEnum | AllocatedBillScalarFieldEnum[]
  }

  /**
   * SharedBill without action
   */
  export type SharedBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBill
     */
    select?: SharedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedBill
     */
    omit?: SharedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedBillInclude<ExtArgs> | null
  }


  /**
   * Model AllocatedBill
   */

  export type AggregateAllocatedBill = {
    _count: AllocatedBillCountAggregateOutputType | null
    _avg: AllocatedBillAvgAggregateOutputType | null
    _sum: AllocatedBillSumAggregateOutputType | null
    _min: AllocatedBillMinAggregateOutputType | null
    _max: AllocatedBillMaxAggregateOutputType | null
  }

  export type AllocatedBillAvgAggregateOutputType = {
    amount: number | null
  }

  export type AllocatedBillSumAggregateOutputType = {
    amount: number | null
  }

  export type AllocatedBillMinAggregateOutputType = {
    id: string | null
    sharedBillId: string | null
    tenantId: string | null
    amount: number | null
  }

  export type AllocatedBillMaxAggregateOutputType = {
    id: string | null
    sharedBillId: string | null
    tenantId: string | null
    amount: number | null
  }

  export type AllocatedBillCountAggregateOutputType = {
    id: number
    sharedBillId: number
    tenantId: number
    amount: number
    _all: number
  }


  export type AllocatedBillAvgAggregateInputType = {
    amount?: true
  }

  export type AllocatedBillSumAggregateInputType = {
    amount?: true
  }

  export type AllocatedBillMinAggregateInputType = {
    id?: true
    sharedBillId?: true
    tenantId?: true
    amount?: true
  }

  export type AllocatedBillMaxAggregateInputType = {
    id?: true
    sharedBillId?: true
    tenantId?: true
    amount?: true
  }

  export type AllocatedBillCountAggregateInputType = {
    id?: true
    sharedBillId?: true
    tenantId?: true
    amount?: true
    _all?: true
  }

  export type AllocatedBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocatedBill to aggregate.
     */
    where?: AllocatedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedBills to fetch.
     */
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllocatedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllocatedBills
    **/
    _count?: true | AllocatedBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllocatedBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllocatedBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllocatedBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllocatedBillMaxAggregateInputType
  }

  export type GetAllocatedBillAggregateType<T extends AllocatedBillAggregateArgs> = {
        [P in keyof T & keyof AggregateAllocatedBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllocatedBill[P]>
      : GetScalarType<T[P], AggregateAllocatedBill[P]>
  }




  export type AllocatedBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocatedBillWhereInput
    orderBy?: AllocatedBillOrderByWithAggregationInput | AllocatedBillOrderByWithAggregationInput[]
    by: AllocatedBillScalarFieldEnum[] | AllocatedBillScalarFieldEnum
    having?: AllocatedBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllocatedBillCountAggregateInputType | true
    _avg?: AllocatedBillAvgAggregateInputType
    _sum?: AllocatedBillSumAggregateInputType
    _min?: AllocatedBillMinAggregateInputType
    _max?: AllocatedBillMaxAggregateInputType
  }

  export type AllocatedBillGroupByOutputType = {
    id: string
    sharedBillId: string
    tenantId: string
    amount: number
    _count: AllocatedBillCountAggregateOutputType | null
    _avg: AllocatedBillAvgAggregateOutputType | null
    _sum: AllocatedBillSumAggregateOutputType | null
    _min: AllocatedBillMinAggregateOutputType | null
    _max: AllocatedBillMaxAggregateOutputType | null
  }

  type GetAllocatedBillGroupByPayload<T extends AllocatedBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllocatedBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllocatedBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllocatedBillGroupByOutputType[P]>
            : GetScalarType<T[P], AllocatedBillGroupByOutputType[P]>
        }
      >
    >


  export type AllocatedBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedBillId?: boolean
    tenantId?: boolean
    amount?: boolean
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedBill"]>

  export type AllocatedBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedBillId?: boolean
    tenantId?: boolean
    amount?: boolean
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedBill"]>

  export type AllocatedBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedBillId?: boolean
    tenantId?: boolean
    amount?: boolean
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedBill"]>

  export type AllocatedBillSelectScalar = {
    id?: boolean
    sharedBillId?: boolean
    tenantId?: boolean
    amount?: boolean
  }

  export type AllocatedBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sharedBillId" | "tenantId" | "amount", ExtArgs["result"]["allocatedBill"]>
  export type AllocatedBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AllocatedBillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AllocatedBillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBill?: boolean | SharedBillDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AllocatedBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllocatedBill"
    objects: {
      sharedBill: Prisma.$SharedBillPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sharedBillId: string
      tenantId: string
      amount: number
    }, ExtArgs["result"]["allocatedBill"]>
    composites: {}
  }

  type AllocatedBillGetPayload<S extends boolean | null | undefined | AllocatedBillDefaultArgs> = $Result.GetResult<Prisma.$AllocatedBillPayload, S>

  type AllocatedBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllocatedBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllocatedBillCountAggregateInputType | true
    }

  export interface AllocatedBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllocatedBill'], meta: { name: 'AllocatedBill' } }
    /**
     * Find zero or one AllocatedBill that matches the filter.
     * @param {AllocatedBillFindUniqueArgs} args - Arguments to find a AllocatedBill
     * @example
     * // Get one AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllocatedBillFindUniqueArgs>(args: SelectSubset<T, AllocatedBillFindUniqueArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllocatedBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllocatedBillFindUniqueOrThrowArgs} args - Arguments to find a AllocatedBill
     * @example
     * // Get one AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllocatedBillFindUniqueOrThrowArgs>(args: SelectSubset<T, AllocatedBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllocatedBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillFindFirstArgs} args - Arguments to find a AllocatedBill
     * @example
     * // Get one AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllocatedBillFindFirstArgs>(args?: SelectSubset<T, AllocatedBillFindFirstArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllocatedBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillFindFirstOrThrowArgs} args - Arguments to find a AllocatedBill
     * @example
     * // Get one AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllocatedBillFindFirstOrThrowArgs>(args?: SelectSubset<T, AllocatedBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllocatedBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllocatedBills
     * const allocatedBills = await prisma.allocatedBill.findMany()
     * 
     * // Get first 10 AllocatedBills
     * const allocatedBills = await prisma.allocatedBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allocatedBillWithIdOnly = await prisma.allocatedBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllocatedBillFindManyArgs>(args?: SelectSubset<T, AllocatedBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllocatedBill.
     * @param {AllocatedBillCreateArgs} args - Arguments to create a AllocatedBill.
     * @example
     * // Create one AllocatedBill
     * const AllocatedBill = await prisma.allocatedBill.create({
     *   data: {
     *     // ... data to create a AllocatedBill
     *   }
     * })
     * 
     */
    create<T extends AllocatedBillCreateArgs>(args: SelectSubset<T, AllocatedBillCreateArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllocatedBills.
     * @param {AllocatedBillCreateManyArgs} args - Arguments to create many AllocatedBills.
     * @example
     * // Create many AllocatedBills
     * const allocatedBill = await prisma.allocatedBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllocatedBillCreateManyArgs>(args?: SelectSubset<T, AllocatedBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllocatedBills and returns the data saved in the database.
     * @param {AllocatedBillCreateManyAndReturnArgs} args - Arguments to create many AllocatedBills.
     * @example
     * // Create many AllocatedBills
     * const allocatedBill = await prisma.allocatedBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllocatedBills and only return the `id`
     * const allocatedBillWithIdOnly = await prisma.allocatedBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllocatedBillCreateManyAndReturnArgs>(args?: SelectSubset<T, AllocatedBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllocatedBill.
     * @param {AllocatedBillDeleteArgs} args - Arguments to delete one AllocatedBill.
     * @example
     * // Delete one AllocatedBill
     * const AllocatedBill = await prisma.allocatedBill.delete({
     *   where: {
     *     // ... filter to delete one AllocatedBill
     *   }
     * })
     * 
     */
    delete<T extends AllocatedBillDeleteArgs>(args: SelectSubset<T, AllocatedBillDeleteArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllocatedBill.
     * @param {AllocatedBillUpdateArgs} args - Arguments to update one AllocatedBill.
     * @example
     * // Update one AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllocatedBillUpdateArgs>(args: SelectSubset<T, AllocatedBillUpdateArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllocatedBills.
     * @param {AllocatedBillDeleteManyArgs} args - Arguments to filter AllocatedBills to delete.
     * @example
     * // Delete a few AllocatedBills
     * const { count } = await prisma.allocatedBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllocatedBillDeleteManyArgs>(args?: SelectSubset<T, AllocatedBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllocatedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllocatedBills
     * const allocatedBill = await prisma.allocatedBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllocatedBillUpdateManyArgs>(args: SelectSubset<T, AllocatedBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllocatedBills and returns the data updated in the database.
     * @param {AllocatedBillUpdateManyAndReturnArgs} args - Arguments to update many AllocatedBills.
     * @example
     * // Update many AllocatedBills
     * const allocatedBill = await prisma.allocatedBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllocatedBills and only return the `id`
     * const allocatedBillWithIdOnly = await prisma.allocatedBill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllocatedBillUpdateManyAndReturnArgs>(args: SelectSubset<T, AllocatedBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllocatedBill.
     * @param {AllocatedBillUpsertArgs} args - Arguments to update or create a AllocatedBill.
     * @example
     * // Update or create a AllocatedBill
     * const allocatedBill = await prisma.allocatedBill.upsert({
     *   create: {
     *     // ... data to create a AllocatedBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllocatedBill we want to update
     *   }
     * })
     */
    upsert<T extends AllocatedBillUpsertArgs>(args: SelectSubset<T, AllocatedBillUpsertArgs<ExtArgs>>): Prisma__AllocatedBillClient<$Result.GetResult<Prisma.$AllocatedBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllocatedBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillCountArgs} args - Arguments to filter AllocatedBills to count.
     * @example
     * // Count the number of AllocatedBills
     * const count = await prisma.allocatedBill.count({
     *   where: {
     *     // ... the filter for the AllocatedBills we want to count
     *   }
     * })
    **/
    count<T extends AllocatedBillCountArgs>(
      args?: Subset<T, AllocatedBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllocatedBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllocatedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllocatedBillAggregateArgs>(args: Subset<T, AllocatedBillAggregateArgs>): Prisma.PrismaPromise<GetAllocatedBillAggregateType<T>>

    /**
     * Group by AllocatedBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedBillGroupByArgs} args - Group by arguments.
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
      T extends AllocatedBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllocatedBillGroupByArgs['orderBy'] }
        : { orderBy?: AllocatedBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AllocatedBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllocatedBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllocatedBill model
   */
  readonly fields: AllocatedBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllocatedBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllocatedBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sharedBill<T extends SharedBillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SharedBillDefaultArgs<ExtArgs>>): Prisma__SharedBillClient<$Result.GetResult<Prisma.$SharedBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AllocatedBill model
   */
  interface AllocatedBillFieldRefs {
    readonly id: FieldRef<"AllocatedBill", 'String'>
    readonly sharedBillId: FieldRef<"AllocatedBill", 'String'>
    readonly tenantId: FieldRef<"AllocatedBill", 'String'>
    readonly amount: FieldRef<"AllocatedBill", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AllocatedBill findUnique
   */
  export type AllocatedBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedBill to fetch.
     */
    where: AllocatedBillWhereUniqueInput
  }

  /**
   * AllocatedBill findUniqueOrThrow
   */
  export type AllocatedBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedBill to fetch.
     */
    where: AllocatedBillWhereUniqueInput
  }

  /**
   * AllocatedBill findFirst
   */
  export type AllocatedBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedBill to fetch.
     */
    where?: AllocatedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedBills to fetch.
     */
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocatedBills.
     */
    cursor?: AllocatedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocatedBills.
     */
    distinct?: AllocatedBillScalarFieldEnum | AllocatedBillScalarFieldEnum[]
  }

  /**
   * AllocatedBill findFirstOrThrow
   */
  export type AllocatedBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedBill to fetch.
     */
    where?: AllocatedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedBills to fetch.
     */
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocatedBills.
     */
    cursor?: AllocatedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocatedBills.
     */
    distinct?: AllocatedBillScalarFieldEnum | AllocatedBillScalarFieldEnum[]
  }

  /**
   * AllocatedBill findMany
   */
  export type AllocatedBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedBills to fetch.
     */
    where?: AllocatedBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedBills to fetch.
     */
    orderBy?: AllocatedBillOrderByWithRelationInput | AllocatedBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllocatedBills.
     */
    cursor?: AllocatedBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedBills.
     */
    skip?: number
    distinct?: AllocatedBillScalarFieldEnum | AllocatedBillScalarFieldEnum[]
  }

  /**
   * AllocatedBill create
   */
  export type AllocatedBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * The data needed to create a AllocatedBill.
     */
    data: XOR<AllocatedBillCreateInput, AllocatedBillUncheckedCreateInput>
  }

  /**
   * AllocatedBill createMany
   */
  export type AllocatedBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllocatedBills.
     */
    data: AllocatedBillCreateManyInput | AllocatedBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllocatedBill createManyAndReturn
   */
  export type AllocatedBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * The data used to create many AllocatedBills.
     */
    data: AllocatedBillCreateManyInput | AllocatedBillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AllocatedBill update
   */
  export type AllocatedBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * The data needed to update a AllocatedBill.
     */
    data: XOR<AllocatedBillUpdateInput, AllocatedBillUncheckedUpdateInput>
    /**
     * Choose, which AllocatedBill to update.
     */
    where: AllocatedBillWhereUniqueInput
  }

  /**
   * AllocatedBill updateMany
   */
  export type AllocatedBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllocatedBills.
     */
    data: XOR<AllocatedBillUpdateManyMutationInput, AllocatedBillUncheckedUpdateManyInput>
    /**
     * Filter which AllocatedBills to update
     */
    where?: AllocatedBillWhereInput
    /**
     * Limit how many AllocatedBills to update.
     */
    limit?: number
  }

  /**
   * AllocatedBill updateManyAndReturn
   */
  export type AllocatedBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * The data used to update AllocatedBills.
     */
    data: XOR<AllocatedBillUpdateManyMutationInput, AllocatedBillUncheckedUpdateManyInput>
    /**
     * Filter which AllocatedBills to update
     */
    where?: AllocatedBillWhereInput
    /**
     * Limit how many AllocatedBills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AllocatedBill upsert
   */
  export type AllocatedBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * The filter to search for the AllocatedBill to update in case it exists.
     */
    where: AllocatedBillWhereUniqueInput
    /**
     * In case the AllocatedBill found by the `where` argument doesn't exist, create a new AllocatedBill with this data.
     */
    create: XOR<AllocatedBillCreateInput, AllocatedBillUncheckedCreateInput>
    /**
     * In case the AllocatedBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllocatedBillUpdateInput, AllocatedBillUncheckedUpdateInput>
  }

  /**
   * AllocatedBill delete
   */
  export type AllocatedBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
    /**
     * Filter which AllocatedBill to delete.
     */
    where: AllocatedBillWhereUniqueInput
  }

  /**
   * AllocatedBill deleteMany
   */
  export type AllocatedBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocatedBills to delete
     */
    where?: AllocatedBillWhereInput
    /**
     * Limit how many AllocatedBills to delete.
     */
    limit?: number
  }

  /**
   * AllocatedBill without action
   */
  export type AllocatedBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedBill
     */
    select?: AllocatedBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedBill
     */
    omit?: AllocatedBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedBillInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    date: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    date: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    date: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "date", ExtArgs["result"]["announcement"]>

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      date: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly date: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
  }


  /**
   * Model Delegate
   */

  export type AggregateDelegate = {
    _count: DelegateCountAggregateOutputType | null
    _min: DelegateMinAggregateOutputType | null
    _max: DelegateMaxAggregateOutputType | null
  }

  export type DelegateMinAggregateOutputType = {
    id: string | null
    task: string | null
    tenantId: string | null
  }

  export type DelegateMaxAggregateOutputType = {
    id: string | null
    task: string | null
    tenantId: string | null
  }

  export type DelegateCountAggregateOutputType = {
    id: number
    task: number
    tenantId: number
    _all: number
  }


  export type DelegateMinAggregateInputType = {
    id?: true
    task?: true
    tenantId?: true
  }

  export type DelegateMaxAggregateInputType = {
    id?: true
    task?: true
    tenantId?: true
  }

  export type DelegateCountAggregateInputType = {
    id?: true
    task?: true
    tenantId?: true
    _all?: true
  }

  export type DelegateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegate to aggregate.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Delegates
    **/
    _count?: true | DelegateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegateMaxAggregateInputType
  }

  export type GetDelegateAggregateType<T extends DelegateAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegate[P]>
      : GetScalarType<T[P], AggregateDelegate[P]>
  }




  export type DelegateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegateWhereInput
    orderBy?: DelegateOrderByWithAggregationInput | DelegateOrderByWithAggregationInput[]
    by: DelegateScalarFieldEnum[] | DelegateScalarFieldEnum
    having?: DelegateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegateCountAggregateInputType | true
    _min?: DelegateMinAggregateInputType
    _max?: DelegateMaxAggregateInputType
  }

  export type DelegateGroupByOutputType = {
    id: string
    task: string
    tenantId: string
    _count: DelegateCountAggregateOutputType | null
    _min: DelegateMinAggregateOutputType | null
    _max: DelegateMaxAggregateOutputType | null
  }

  type GetDelegateGroupByPayload<T extends DelegateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegateGroupByOutputType[P]>
            : GetScalarType<T[P], DelegateGroupByOutputType[P]>
        }
      >
    >


  export type DelegateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegate"]>

  export type DelegateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegate"]>

  export type DelegateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegate"]>

  export type DelegateSelectScalar = {
    id?: boolean
    task?: boolean
    tenantId?: boolean
  }

  export type DelegateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task" | "tenantId", ExtArgs["result"]["delegate"]>
  export type DelegateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type DelegateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type DelegateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $DelegatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delegate"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task: string
      tenantId: string
    }, ExtArgs["result"]["delegate"]>
    composites: {}
  }

  type DelegateGetPayload<S extends boolean | null | undefined | DelegateDefaultArgs> = $Result.GetResult<Prisma.$DelegatePayload, S>

  type DelegateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegateCountAggregateInputType | true
    }

  export interface DelegateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delegate'], meta: { name: 'Delegate' } }
    /**
     * Find zero or one Delegate that matches the filter.
     * @param {DelegateFindUniqueArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegateFindUniqueArgs>(args: SelectSubset<T, DelegateFindUniqueArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delegate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegateFindUniqueOrThrowArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegateFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindFirstArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegateFindFirstArgs>(args?: SelectSubset<T, DelegateFindFirstArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindFirstOrThrowArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegateFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delegates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Delegates
     * const delegates = await prisma.delegate.findMany()
     * 
     * // Get first 10 Delegates
     * const delegates = await prisma.delegate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegateWithIdOnly = await prisma.delegate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegateFindManyArgs>(args?: SelectSubset<T, DelegateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delegate.
     * @param {DelegateCreateArgs} args - Arguments to create a Delegate.
     * @example
     * // Create one Delegate
     * const Delegate = await prisma.delegate.create({
     *   data: {
     *     // ... data to create a Delegate
     *   }
     * })
     * 
     */
    create<T extends DelegateCreateArgs>(args: SelectSubset<T, DelegateCreateArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Delegates.
     * @param {DelegateCreateManyArgs} args - Arguments to create many Delegates.
     * @example
     * // Create many Delegates
     * const delegate = await prisma.delegate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegateCreateManyArgs>(args?: SelectSubset<T, DelegateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Delegates and returns the data saved in the database.
     * @param {DelegateCreateManyAndReturnArgs} args - Arguments to create many Delegates.
     * @example
     * // Create many Delegates
     * const delegate = await prisma.delegate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Delegates and only return the `id`
     * const delegateWithIdOnly = await prisma.delegate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DelegateCreateManyAndReturnArgs>(args?: SelectSubset<T, DelegateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delegate.
     * @param {DelegateDeleteArgs} args - Arguments to delete one Delegate.
     * @example
     * // Delete one Delegate
     * const Delegate = await prisma.delegate.delete({
     *   where: {
     *     // ... filter to delete one Delegate
     *   }
     * })
     * 
     */
    delete<T extends DelegateDeleteArgs>(args: SelectSubset<T, DelegateDeleteArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delegate.
     * @param {DelegateUpdateArgs} args - Arguments to update one Delegate.
     * @example
     * // Update one Delegate
     * const delegate = await prisma.delegate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegateUpdateArgs>(args: SelectSubset<T, DelegateUpdateArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Delegates.
     * @param {DelegateDeleteManyArgs} args - Arguments to filter Delegates to delete.
     * @example
     * // Delete a few Delegates
     * const { count } = await prisma.delegate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegateDeleteManyArgs>(args?: SelectSubset<T, DelegateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Delegates
     * const delegate = await prisma.delegate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegateUpdateManyArgs>(args: SelectSubset<T, DelegateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegates and returns the data updated in the database.
     * @param {DelegateUpdateManyAndReturnArgs} args - Arguments to update many Delegates.
     * @example
     * // Update many Delegates
     * const delegate = await prisma.delegate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Delegates and only return the `id`
     * const delegateWithIdOnly = await prisma.delegate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DelegateUpdateManyAndReturnArgs>(args: SelectSubset<T, DelegateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delegate.
     * @param {DelegateUpsertArgs} args - Arguments to update or create a Delegate.
     * @example
     * // Update or create a Delegate
     * const delegate = await prisma.delegate.upsert({
     *   create: {
     *     // ... data to create a Delegate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delegate we want to update
     *   }
     * })
     */
    upsert<T extends DelegateUpsertArgs>(args: SelectSubset<T, DelegateUpsertArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Delegates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateCountArgs} args - Arguments to filter Delegates to count.
     * @example
     * // Count the number of Delegates
     * const count = await prisma.delegate.count({
     *   where: {
     *     // ... the filter for the Delegates we want to count
     *   }
     * })
    **/
    count<T extends DelegateCountArgs>(
      args?: Subset<T, DelegateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delegate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DelegateAggregateArgs>(args: Subset<T, DelegateAggregateArgs>): Prisma.PrismaPromise<GetDelegateAggregateType<T>>

    /**
     * Group by Delegate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateGroupByArgs} args - Group by arguments.
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
      T extends DelegateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegateGroupByArgs['orderBy'] }
        : { orderBy?: DelegateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DelegateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delegate model
   */
  readonly fields: DelegateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delegate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Delegate model
   */
  interface DelegateFieldRefs {
    readonly id: FieldRef<"Delegate", 'String'>
    readonly task: FieldRef<"Delegate", 'String'>
    readonly tenantId: FieldRef<"Delegate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Delegate findUnique
   */
  export type DelegateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate findUniqueOrThrow
   */
  export type DelegateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate findFirst
   */
  export type DelegateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegates.
     */
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate findFirstOrThrow
   */
  export type DelegateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegates.
     */
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate findMany
   */
  export type DelegateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegates to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate create
   */
  export type DelegateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The data needed to create a Delegate.
     */
    data: XOR<DelegateCreateInput, DelegateUncheckedCreateInput>
  }

  /**
   * Delegate createMany
   */
  export type DelegateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Delegates.
     */
    data: DelegateCreateManyInput | DelegateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delegate createManyAndReturn
   */
  export type DelegateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * The data used to create many Delegates.
     */
    data: DelegateCreateManyInput | DelegateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delegate update
   */
  export type DelegateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The data needed to update a Delegate.
     */
    data: XOR<DelegateUpdateInput, DelegateUncheckedUpdateInput>
    /**
     * Choose, which Delegate to update.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate updateMany
   */
  export type DelegateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Delegates.
     */
    data: XOR<DelegateUpdateManyMutationInput, DelegateUncheckedUpdateManyInput>
    /**
     * Filter which Delegates to update
     */
    where?: DelegateWhereInput
    /**
     * Limit how many Delegates to update.
     */
    limit?: number
  }

  /**
   * Delegate updateManyAndReturn
   */
  export type DelegateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * The data used to update Delegates.
     */
    data: XOR<DelegateUpdateManyMutationInput, DelegateUncheckedUpdateManyInput>
    /**
     * Filter which Delegates to update
     */
    where?: DelegateWhereInput
    /**
     * Limit how many Delegates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delegate upsert
   */
  export type DelegateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The filter to search for the Delegate to update in case it exists.
     */
    where: DelegateWhereUniqueInput
    /**
     * In case the Delegate found by the `where` argument doesn't exist, create a new Delegate with this data.
     */
    create: XOR<DelegateCreateInput, DelegateUncheckedCreateInput>
    /**
     * In case the Delegate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegateUpdateInput, DelegateUncheckedUpdateInput>
  }

  /**
   * Delegate delete
   */
  export type DelegateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter which Delegate to delete.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate deleteMany
   */
  export type DelegateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegates to delete
     */
    where?: DelegateWhereInput
    /**
     * Limit how many Delegates to delete.
     */
    limit?: number
  }

  /**
   * Delegate without action
   */
  export type DelegateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyAddress: 'propertyAddress',
    imageUrl: 'imageUrl'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    amount: 'amount',
    month: 'month',
    status: 'status',
    dueDate: 'dueDate',
    carriedOverAmount: 'carriedOverAmount'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    billId: 'billId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    receiptId: 'receiptId',
    receiptText: 'receiptText'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SharedBillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    date: 'date'
  };

  export type SharedBillScalarFieldEnum = (typeof SharedBillScalarFieldEnum)[keyof typeof SharedBillScalarFieldEnum]


  export const AllocatedBillScalarFieldEnum: {
    id: 'id',
    sharedBillId: 'sharedBillId',
    tenantId: 'tenantId',
    amount: 'amount'
  };

  export type AllocatedBillScalarFieldEnum = (typeof AllocatedBillScalarFieldEnum)[keyof typeof AllocatedBillScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    date: 'date'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const DelegateScalarFieldEnum: {
    id: 'id',
    task: 'task',
    tenantId: 'tenantId'
  };

  export type DelegateScalarFieldEnum = (typeof DelegateScalarFieldEnum)[keyof typeof DelegateScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    propertyAddress?: StringFilter<"Tenant"> | string
    imageUrl?: StringNullableFilter<"Tenant"> | string | null
    bills?: BillListRelationFilter
    payments?: PaymentListRelationFilter
    delegations?: DelegateListRelationFilter
    allocatedBills?: AllocatedBillListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyAddress?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bills?: BillOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    delegations?: DelegateOrderByRelationAggregateInput
    allocatedBills?: AllocatedBillOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    propertyAddress?: StringFilter<"Tenant"> | string
    imageUrl?: StringNullableFilter<"Tenant"> | string | null
    bills?: BillListRelationFilter
    payments?: PaymentListRelationFilter
    delegations?: DelegateListRelationFilter
    allocatedBills?: AllocatedBillListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyAddress?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    propertyAddress?: StringWithAggregatesFilter<"Tenant"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    tenantId?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    month?: StringFilter<"Bill"> | string
    status?: StringFilter<"Bill"> | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    carriedOverAmount?: FloatNullableFilter<"Bill"> | number | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    carriedOverAmount?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    tenantId?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    month?: StringFilter<"Bill"> | string
    status?: StringFilter<"Bill"> | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    carriedOverAmount?: FloatNullableFilter<"Bill"> | number | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    carriedOverAmount?: SortOrderInput | SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    tenantId?: StringWithAggregatesFilter<"Bill"> | string
    amount?: FloatWithAggregatesFilter<"Bill"> | number
    month?: StringWithAggregatesFilter<"Bill"> | string
    status?: StringWithAggregatesFilter<"Bill"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    carriedOverAmount?: FloatNullableWithAggregatesFilter<"Bill"> | number | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    receiptId?: StringFilter<"Payment"> | string
    receiptText?: StringFilter<"Payment"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptId?: SortOrder
    receiptText?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    bill?: BillOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    tenantId?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    receiptText?: StringFilter<"Payment"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id" | "receiptId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptId?: SortOrder
    receiptText?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    tenantId?: StringWithAggregatesFilter<"Payment"> | string
    billId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    receiptId?: StringWithAggregatesFilter<"Payment"> | string
    receiptText?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type SharedBillWhereInput = {
    AND?: SharedBillWhereInput | SharedBillWhereInput[]
    OR?: SharedBillWhereInput[]
    NOT?: SharedBillWhereInput | SharedBillWhereInput[]
    id?: StringFilter<"SharedBill"> | string
    name?: StringFilter<"SharedBill"> | string
    amount?: FloatFilter<"SharedBill"> | number
    date?: DateTimeFilter<"SharedBill"> | Date | string
    allocatedBills?: AllocatedBillListRelationFilter
  }

  export type SharedBillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    allocatedBills?: AllocatedBillOrderByRelationAggregateInput
  }

  export type SharedBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SharedBillWhereInput | SharedBillWhereInput[]
    OR?: SharedBillWhereInput[]
    NOT?: SharedBillWhereInput | SharedBillWhereInput[]
    name?: StringFilter<"SharedBill"> | string
    amount?: FloatFilter<"SharedBill"> | number
    date?: DateTimeFilter<"SharedBill"> | Date | string
    allocatedBills?: AllocatedBillListRelationFilter
  }, "id">

  export type SharedBillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    _count?: SharedBillCountOrderByAggregateInput
    _avg?: SharedBillAvgOrderByAggregateInput
    _max?: SharedBillMaxOrderByAggregateInput
    _min?: SharedBillMinOrderByAggregateInput
    _sum?: SharedBillSumOrderByAggregateInput
  }

  export type SharedBillScalarWhereWithAggregatesInput = {
    AND?: SharedBillScalarWhereWithAggregatesInput | SharedBillScalarWhereWithAggregatesInput[]
    OR?: SharedBillScalarWhereWithAggregatesInput[]
    NOT?: SharedBillScalarWhereWithAggregatesInput | SharedBillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedBill"> | string
    name?: StringWithAggregatesFilter<"SharedBill"> | string
    amount?: FloatWithAggregatesFilter<"SharedBill"> | number
    date?: DateTimeWithAggregatesFilter<"SharedBill"> | Date | string
  }

  export type AllocatedBillWhereInput = {
    AND?: AllocatedBillWhereInput | AllocatedBillWhereInput[]
    OR?: AllocatedBillWhereInput[]
    NOT?: AllocatedBillWhereInput | AllocatedBillWhereInput[]
    id?: StringFilter<"AllocatedBill"> | string
    sharedBillId?: StringFilter<"AllocatedBill"> | string
    tenantId?: StringFilter<"AllocatedBill"> | string
    amount?: FloatFilter<"AllocatedBill"> | number
    sharedBill?: XOR<SharedBillScalarRelationFilter, SharedBillWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type AllocatedBillOrderByWithRelationInput = {
    id?: SortOrder
    sharedBillId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    sharedBill?: SharedBillOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type AllocatedBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllocatedBillWhereInput | AllocatedBillWhereInput[]
    OR?: AllocatedBillWhereInput[]
    NOT?: AllocatedBillWhereInput | AllocatedBillWhereInput[]
    sharedBillId?: StringFilter<"AllocatedBill"> | string
    tenantId?: StringFilter<"AllocatedBill"> | string
    amount?: FloatFilter<"AllocatedBill"> | number
    sharedBill?: XOR<SharedBillScalarRelationFilter, SharedBillWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type AllocatedBillOrderByWithAggregationInput = {
    id?: SortOrder
    sharedBillId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    _count?: AllocatedBillCountOrderByAggregateInput
    _avg?: AllocatedBillAvgOrderByAggregateInput
    _max?: AllocatedBillMaxOrderByAggregateInput
    _min?: AllocatedBillMinOrderByAggregateInput
    _sum?: AllocatedBillSumOrderByAggregateInput
  }

  export type AllocatedBillScalarWhereWithAggregatesInput = {
    AND?: AllocatedBillScalarWhereWithAggregatesInput | AllocatedBillScalarWhereWithAggregatesInput[]
    OR?: AllocatedBillScalarWhereWithAggregatesInput[]
    NOT?: AllocatedBillScalarWhereWithAggregatesInput | AllocatedBillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllocatedBill"> | string
    sharedBillId?: StringWithAggregatesFilter<"AllocatedBill"> | string
    tenantId?: StringWithAggregatesFilter<"AllocatedBill"> | string
    amount?: FloatWithAggregatesFilter<"AllocatedBill"> | number
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    date?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    date?: DateTimeFilter<"Announcement"> | Date | string
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    date?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type DelegateWhereInput = {
    AND?: DelegateWhereInput | DelegateWhereInput[]
    OR?: DelegateWhereInput[]
    NOT?: DelegateWhereInput | DelegateWhereInput[]
    id?: StringFilter<"Delegate"> | string
    task?: StringFilter<"Delegate"> | string
    tenantId?: StringFilter<"Delegate"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type DelegateOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type DelegateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DelegateWhereInput | DelegateWhereInput[]
    OR?: DelegateWhereInput[]
    NOT?: DelegateWhereInput | DelegateWhereInput[]
    task?: StringFilter<"Delegate"> | string
    tenantId?: StringFilter<"Delegate"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type DelegateOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    tenantId?: SortOrder
    _count?: DelegateCountOrderByAggregateInput
    _max?: DelegateMaxOrderByAggregateInput
    _min?: DelegateMinOrderByAggregateInput
  }

  export type DelegateScalarWhereWithAggregatesInput = {
    AND?: DelegateScalarWhereWithAggregatesInput | DelegateScalarWhereWithAggregatesInput[]
    OR?: DelegateScalarWhereWithAggregatesInput[]
    NOT?: DelegateScalarWhereWithAggregatesInput | DelegateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delegate"> | string
    task?: StringWithAggregatesFilter<"Delegate"> | string
    tenantId?: StringWithAggregatesFilter<"Delegate"> | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    delegations?: DelegateCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    delegations?: DelegateUncheckedCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUncheckedUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillCreateInput = {
    id?: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
    tenant: TenantCreateNestedOneWithoutBillsInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    tenantId: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tenant?: TenantUpdateOneRequiredWithoutBillsNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    tenantId: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
    tenant: TenantCreateNestedOneWithoutPaymentsInput
    bill: BillCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    tenantId: string
    billId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
    bill?: BillUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    tenantId: string
    billId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type SharedBillCreateInput = {
    id?: string
    name: string
    amount: number
    date: Date | string
    allocatedBills?: AllocatedBillCreateNestedManyWithoutSharedBillInput
  }

  export type SharedBillUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    date: Date | string
    allocatedBills?: AllocatedBillUncheckedCreateNestedManyWithoutSharedBillInput
  }

  export type SharedBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedBills?: AllocatedBillUpdateManyWithoutSharedBillNestedInput
  }

  export type SharedBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedBills?: AllocatedBillUncheckedUpdateManyWithoutSharedBillNestedInput
  }

  export type SharedBillCreateManyInput = {
    id?: string
    name: string
    amount: number
    date: Date | string
  }

  export type SharedBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocatedBillCreateInput = {
    id?: string
    amount: number
    sharedBill: SharedBillCreateNestedOneWithoutAllocatedBillsInput
    tenant: TenantCreateNestedOneWithoutAllocatedBillsInput
  }

  export type AllocatedBillUncheckedCreateInput = {
    id?: string
    sharedBillId: string
    tenantId: string
    amount: number
  }

  export type AllocatedBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    sharedBill?: SharedBillUpdateOneRequiredWithoutAllocatedBillsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutAllocatedBillsNestedInput
  }

  export type AllocatedBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedBillId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type AllocatedBillCreateManyInput = {
    id?: string
    sharedBillId: string
    tenantId: string
    amount: number
  }

  export type AllocatedBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type AllocatedBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedBillId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    date: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    date: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegateCreateInput = {
    id?: string
    task: string
    tenant: TenantCreateNestedOneWithoutDelegationsInput
  }

  export type DelegateUncheckedCreateInput = {
    id?: string
    task: string
    tenantId: string
  }

  export type DelegateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutDelegationsNestedInput
  }

  export type DelegateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type DelegateCreateManyInput = {
    id?: string
    task: string
    tenantId: string
  }

  export type DelegateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
  }

  export type DelegateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
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

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type DelegateListRelationFilter = {
    every?: DelegateWhereInput
    some?: DelegateWhereInput
    none?: DelegateWhereInput
  }

  export type AllocatedBillListRelationFilter = {
    every?: AllocatedBillWhereInput
    some?: AllocatedBillWhereInput
    none?: AllocatedBillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DelegateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AllocatedBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyAddress?: SortOrder
    imageUrl?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyAddress?: SortOrder
    imageUrl?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyAddress?: SortOrder
    imageUrl?: SortOrder
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

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    carriedOverAmount?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    amount?: SortOrder
    carriedOverAmount?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    carriedOverAmount?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    carriedOverAmount?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    amount?: SortOrder
    carriedOverAmount?: SortOrder
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

  export type BillScalarRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptId?: SortOrder
    receiptText?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptId?: SortOrder
    receiptText?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptId?: SortOrder
    receiptText?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SharedBillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type SharedBillAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SharedBillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type SharedBillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type SharedBillSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SharedBillScalarRelationFilter = {
    is?: SharedBillWhereInput
    isNot?: SharedBillWhereInput
  }

  export type AllocatedBillCountOrderByAggregateInput = {
    id?: SortOrder
    sharedBillId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
  }

  export type AllocatedBillAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AllocatedBillMaxOrderByAggregateInput = {
    id?: SortOrder
    sharedBillId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
  }

  export type AllocatedBillMinOrderByAggregateInput = {
    id?: SortOrder
    sharedBillId?: SortOrder
    tenantId?: SortOrder
    amount?: SortOrder
  }

  export type AllocatedBillSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type DelegateCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    tenantId?: SortOrder
  }

  export type DelegateMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    tenantId?: SortOrder
  }

  export type DelegateMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    tenantId?: SortOrder
  }

  export type BillCreateNestedManyWithoutTenantInput = {
    create?: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput> | BillCreateWithoutTenantInput[] | BillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTenantInput | BillCreateOrConnectWithoutTenantInput[]
    createMany?: BillCreateManyTenantInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DelegateCreateNestedManyWithoutTenantInput = {
    create?: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput> | DelegateCreateWithoutTenantInput[] | DelegateUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DelegateCreateOrConnectWithoutTenantInput | DelegateCreateOrConnectWithoutTenantInput[]
    createMany?: DelegateCreateManyTenantInputEnvelope
    connect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
  }

  export type AllocatedBillCreateNestedManyWithoutTenantInput = {
    create?: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput> | AllocatedBillCreateWithoutTenantInput[] | AllocatedBillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutTenantInput | AllocatedBillCreateOrConnectWithoutTenantInput[]
    createMany?: AllocatedBillCreateManyTenantInputEnvelope
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput> | BillCreateWithoutTenantInput[] | BillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTenantInput | BillCreateOrConnectWithoutTenantInput[]
    createMany?: BillCreateManyTenantInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DelegateUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput> | DelegateCreateWithoutTenantInput[] | DelegateUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DelegateCreateOrConnectWithoutTenantInput | DelegateCreateOrConnectWithoutTenantInput[]
    createMany?: DelegateCreateManyTenantInputEnvelope
    connect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
  }

  export type AllocatedBillUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput> | AllocatedBillCreateWithoutTenantInput[] | AllocatedBillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutTenantInput | AllocatedBillCreateOrConnectWithoutTenantInput[]
    createMany?: AllocatedBillCreateManyTenantInputEnvelope
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BillUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput> | BillCreateWithoutTenantInput[] | BillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTenantInput | BillCreateOrConnectWithoutTenantInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutTenantInput | BillUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BillCreateManyTenantInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutTenantInput | BillUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BillUpdateManyWithWhereWithoutTenantInput | BillUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DelegateUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput> | DelegateCreateWithoutTenantInput[] | DelegateUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DelegateCreateOrConnectWithoutTenantInput | DelegateCreateOrConnectWithoutTenantInput[]
    upsert?: DelegateUpsertWithWhereUniqueWithoutTenantInput | DelegateUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DelegateCreateManyTenantInputEnvelope
    set?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    disconnect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    delete?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    connect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    update?: DelegateUpdateWithWhereUniqueWithoutTenantInput | DelegateUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DelegateUpdateManyWithWhereWithoutTenantInput | DelegateUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DelegateScalarWhereInput | DelegateScalarWhereInput[]
  }

  export type AllocatedBillUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput> | AllocatedBillCreateWithoutTenantInput[] | AllocatedBillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutTenantInput | AllocatedBillCreateOrConnectWithoutTenantInput[]
    upsert?: AllocatedBillUpsertWithWhereUniqueWithoutTenantInput | AllocatedBillUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AllocatedBillCreateManyTenantInputEnvelope
    set?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    disconnect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    delete?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    update?: AllocatedBillUpdateWithWhereUniqueWithoutTenantInput | AllocatedBillUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AllocatedBillUpdateManyWithWhereWithoutTenantInput | AllocatedBillUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput> | BillCreateWithoutTenantInput[] | BillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTenantInput | BillCreateOrConnectWithoutTenantInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutTenantInput | BillUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BillCreateManyTenantInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutTenantInput | BillUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BillUpdateManyWithWhereWithoutTenantInput | BillUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DelegateUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput> | DelegateCreateWithoutTenantInput[] | DelegateUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DelegateCreateOrConnectWithoutTenantInput | DelegateCreateOrConnectWithoutTenantInput[]
    upsert?: DelegateUpsertWithWhereUniqueWithoutTenantInput | DelegateUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DelegateCreateManyTenantInputEnvelope
    set?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    disconnect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    delete?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    connect?: DelegateWhereUniqueInput | DelegateWhereUniqueInput[]
    update?: DelegateUpdateWithWhereUniqueWithoutTenantInput | DelegateUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DelegateUpdateManyWithWhereWithoutTenantInput | DelegateUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DelegateScalarWhereInput | DelegateScalarWhereInput[]
  }

  export type AllocatedBillUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput> | AllocatedBillCreateWithoutTenantInput[] | AllocatedBillUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutTenantInput | AllocatedBillCreateOrConnectWithoutTenantInput[]
    upsert?: AllocatedBillUpsertWithWhereUniqueWithoutTenantInput | AllocatedBillUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AllocatedBillCreateManyTenantInputEnvelope
    set?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    disconnect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    delete?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    update?: AllocatedBillUpdateWithWhereUniqueWithoutTenantInput | AllocatedBillUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AllocatedBillUpdateManyWithWhereWithoutTenantInput | AllocatedBillUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutBillsInput = {
    create?: XOR<TenantCreateWithoutBillsInput, TenantUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBillsInput
    connect?: TenantWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<TenantCreateWithoutBillsInput, TenantUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBillsInput
    upsert?: TenantUpsertWithoutBillsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutBillsInput, TenantUpdateWithoutBillsInput>, TenantUncheckedUpdateWithoutBillsInput>
  }

  export type PaymentUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
  }

  export type BillCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    connect?: BillWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentsInput
    upsert?: TenantUpsertWithoutPaymentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPaymentsInput, TenantUpdateWithoutPaymentsInput>, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type BillUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    upsert?: BillUpsertWithoutPaymentsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutPaymentsInput, BillUpdateWithoutPaymentsInput>, BillUncheckedUpdateWithoutPaymentsInput>
  }

  export type AllocatedBillCreateNestedManyWithoutSharedBillInput = {
    create?: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput> | AllocatedBillCreateWithoutSharedBillInput[] | AllocatedBillUncheckedCreateWithoutSharedBillInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutSharedBillInput | AllocatedBillCreateOrConnectWithoutSharedBillInput[]
    createMany?: AllocatedBillCreateManySharedBillInputEnvelope
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
  }

  export type AllocatedBillUncheckedCreateNestedManyWithoutSharedBillInput = {
    create?: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput> | AllocatedBillCreateWithoutSharedBillInput[] | AllocatedBillUncheckedCreateWithoutSharedBillInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutSharedBillInput | AllocatedBillCreateOrConnectWithoutSharedBillInput[]
    createMany?: AllocatedBillCreateManySharedBillInputEnvelope
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
  }

  export type AllocatedBillUpdateManyWithoutSharedBillNestedInput = {
    create?: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput> | AllocatedBillCreateWithoutSharedBillInput[] | AllocatedBillUncheckedCreateWithoutSharedBillInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutSharedBillInput | AllocatedBillCreateOrConnectWithoutSharedBillInput[]
    upsert?: AllocatedBillUpsertWithWhereUniqueWithoutSharedBillInput | AllocatedBillUpsertWithWhereUniqueWithoutSharedBillInput[]
    createMany?: AllocatedBillCreateManySharedBillInputEnvelope
    set?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    disconnect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    delete?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    update?: AllocatedBillUpdateWithWhereUniqueWithoutSharedBillInput | AllocatedBillUpdateWithWhereUniqueWithoutSharedBillInput[]
    updateMany?: AllocatedBillUpdateManyWithWhereWithoutSharedBillInput | AllocatedBillUpdateManyWithWhereWithoutSharedBillInput[]
    deleteMany?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
  }

  export type AllocatedBillUncheckedUpdateManyWithoutSharedBillNestedInput = {
    create?: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput> | AllocatedBillCreateWithoutSharedBillInput[] | AllocatedBillUncheckedCreateWithoutSharedBillInput[]
    connectOrCreate?: AllocatedBillCreateOrConnectWithoutSharedBillInput | AllocatedBillCreateOrConnectWithoutSharedBillInput[]
    upsert?: AllocatedBillUpsertWithWhereUniqueWithoutSharedBillInput | AllocatedBillUpsertWithWhereUniqueWithoutSharedBillInput[]
    createMany?: AllocatedBillCreateManySharedBillInputEnvelope
    set?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    disconnect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    delete?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    connect?: AllocatedBillWhereUniqueInput | AllocatedBillWhereUniqueInput[]
    update?: AllocatedBillUpdateWithWhereUniqueWithoutSharedBillInput | AllocatedBillUpdateWithWhereUniqueWithoutSharedBillInput[]
    updateMany?: AllocatedBillUpdateManyWithWhereWithoutSharedBillInput | AllocatedBillUpdateManyWithWhereWithoutSharedBillInput[]
    deleteMany?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
  }

  export type SharedBillCreateNestedOneWithoutAllocatedBillsInput = {
    create?: XOR<SharedBillCreateWithoutAllocatedBillsInput, SharedBillUncheckedCreateWithoutAllocatedBillsInput>
    connectOrCreate?: SharedBillCreateOrConnectWithoutAllocatedBillsInput
    connect?: SharedBillWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutAllocatedBillsInput = {
    create?: XOR<TenantCreateWithoutAllocatedBillsInput, TenantUncheckedCreateWithoutAllocatedBillsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAllocatedBillsInput
    connect?: TenantWhereUniqueInput
  }

  export type SharedBillUpdateOneRequiredWithoutAllocatedBillsNestedInput = {
    create?: XOR<SharedBillCreateWithoutAllocatedBillsInput, SharedBillUncheckedCreateWithoutAllocatedBillsInput>
    connectOrCreate?: SharedBillCreateOrConnectWithoutAllocatedBillsInput
    upsert?: SharedBillUpsertWithoutAllocatedBillsInput
    connect?: SharedBillWhereUniqueInput
    update?: XOR<XOR<SharedBillUpdateToOneWithWhereWithoutAllocatedBillsInput, SharedBillUpdateWithoutAllocatedBillsInput>, SharedBillUncheckedUpdateWithoutAllocatedBillsInput>
  }

  export type TenantUpdateOneRequiredWithoutAllocatedBillsNestedInput = {
    create?: XOR<TenantCreateWithoutAllocatedBillsInput, TenantUncheckedCreateWithoutAllocatedBillsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAllocatedBillsInput
    upsert?: TenantUpsertWithoutAllocatedBillsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAllocatedBillsInput, TenantUpdateWithoutAllocatedBillsInput>, TenantUncheckedUpdateWithoutAllocatedBillsInput>
  }

  export type TenantCreateNestedOneWithoutDelegationsInput = {
    create?: XOR<TenantCreateWithoutDelegationsInput, TenantUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDelegationsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutDelegationsNestedInput = {
    create?: XOR<TenantCreateWithoutDelegationsInput, TenantUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDelegationsInput
    upsert?: TenantUpsertWithoutDelegationsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutDelegationsInput, TenantUpdateWithoutDelegationsInput>, TenantUncheckedUpdateWithoutDelegationsInput>
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

  export type BillCreateWithoutTenantInput = {
    id?: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutTenantInput = {
    id?: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutTenantInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput>
  }

  export type BillCreateManyTenantInputEnvelope = {
    data: BillCreateManyTenantInput | BillCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTenantInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
    bill: BillCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTenantInput = {
    id?: string
    billId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type PaymentCreateOrConnectWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentCreateManyTenantInputEnvelope = {
    data: PaymentCreateManyTenantInput | PaymentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type DelegateCreateWithoutTenantInput = {
    id?: string
    task: string
  }

  export type DelegateUncheckedCreateWithoutTenantInput = {
    id?: string
    task: string
  }

  export type DelegateCreateOrConnectWithoutTenantInput = {
    where: DelegateWhereUniqueInput
    create: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput>
  }

  export type DelegateCreateManyTenantInputEnvelope = {
    data: DelegateCreateManyTenantInput | DelegateCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AllocatedBillCreateWithoutTenantInput = {
    id?: string
    amount: number
    sharedBill: SharedBillCreateNestedOneWithoutAllocatedBillsInput
  }

  export type AllocatedBillUncheckedCreateWithoutTenantInput = {
    id?: string
    sharedBillId: string
    amount: number
  }

  export type AllocatedBillCreateOrConnectWithoutTenantInput = {
    where: AllocatedBillWhereUniqueInput
    create: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput>
  }

  export type AllocatedBillCreateManyTenantInputEnvelope = {
    data: AllocatedBillCreateManyTenantInput | AllocatedBillCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type BillUpsertWithWhereUniqueWithoutTenantInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutTenantInput, BillUncheckedUpdateWithoutTenantInput>
    create: XOR<BillCreateWithoutTenantInput, BillUncheckedCreateWithoutTenantInput>
  }

  export type BillUpdateWithWhereUniqueWithoutTenantInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutTenantInput, BillUncheckedUpdateWithoutTenantInput>
  }

  export type BillUpdateManyWithWhereWithoutTenantInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutTenantInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: StringFilter<"Bill"> | string
    tenantId?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    month?: StringFilter<"Bill"> | string
    status?: StringFilter<"Bill"> | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    carriedOverAmount?: FloatNullableFilter<"Bill"> | number | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    tenantId?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    receiptId?: StringFilter<"Payment"> | string
    receiptText?: StringFilter<"Payment"> | string
  }

  export type DelegateUpsertWithWhereUniqueWithoutTenantInput = {
    where: DelegateWhereUniqueInput
    update: XOR<DelegateUpdateWithoutTenantInput, DelegateUncheckedUpdateWithoutTenantInput>
    create: XOR<DelegateCreateWithoutTenantInput, DelegateUncheckedCreateWithoutTenantInput>
  }

  export type DelegateUpdateWithWhereUniqueWithoutTenantInput = {
    where: DelegateWhereUniqueInput
    data: XOR<DelegateUpdateWithoutTenantInput, DelegateUncheckedUpdateWithoutTenantInput>
  }

  export type DelegateUpdateManyWithWhereWithoutTenantInput = {
    where: DelegateScalarWhereInput
    data: XOR<DelegateUpdateManyMutationInput, DelegateUncheckedUpdateManyWithoutTenantInput>
  }

  export type DelegateScalarWhereInput = {
    AND?: DelegateScalarWhereInput | DelegateScalarWhereInput[]
    OR?: DelegateScalarWhereInput[]
    NOT?: DelegateScalarWhereInput | DelegateScalarWhereInput[]
    id?: StringFilter<"Delegate"> | string
    task?: StringFilter<"Delegate"> | string
    tenantId?: StringFilter<"Delegate"> | string
  }

  export type AllocatedBillUpsertWithWhereUniqueWithoutTenantInput = {
    where: AllocatedBillWhereUniqueInput
    update: XOR<AllocatedBillUpdateWithoutTenantInput, AllocatedBillUncheckedUpdateWithoutTenantInput>
    create: XOR<AllocatedBillCreateWithoutTenantInput, AllocatedBillUncheckedCreateWithoutTenantInput>
  }

  export type AllocatedBillUpdateWithWhereUniqueWithoutTenantInput = {
    where: AllocatedBillWhereUniqueInput
    data: XOR<AllocatedBillUpdateWithoutTenantInput, AllocatedBillUncheckedUpdateWithoutTenantInput>
  }

  export type AllocatedBillUpdateManyWithWhereWithoutTenantInput = {
    where: AllocatedBillScalarWhereInput
    data: XOR<AllocatedBillUpdateManyMutationInput, AllocatedBillUncheckedUpdateManyWithoutTenantInput>
  }

  export type AllocatedBillScalarWhereInput = {
    AND?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
    OR?: AllocatedBillScalarWhereInput[]
    NOT?: AllocatedBillScalarWhereInput | AllocatedBillScalarWhereInput[]
    id?: StringFilter<"AllocatedBill"> | string
    sharedBillId?: StringFilter<"AllocatedBill"> | string
    tenantId?: StringFilter<"AllocatedBill"> | string
    amount?: FloatFilter<"AllocatedBill"> | number
  }

  export type TenantCreateWithoutBillsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    payments?: PaymentCreateNestedManyWithoutTenantInput
    delegations?: DelegateCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutBillsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    delegations?: DelegateUncheckedCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutBillsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutBillsInput, TenantUncheckedCreateWithoutBillsInput>
  }

  export type PaymentCreateWithoutBillInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
    tenant: TenantCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBillInput = {
    id?: string
    tenantId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type PaymentCreateOrConnectWithoutBillInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentCreateManyBillInputEnvelope = {
    data: PaymentCreateManyBillInput | PaymentCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutBillsInput = {
    update: XOR<TenantUpdateWithoutBillsInput, TenantUncheckedUpdateWithoutBillsInput>
    create: XOR<TenantCreateWithoutBillsInput, TenantUncheckedCreateWithoutBillsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutBillsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutBillsInput, TenantUncheckedUpdateWithoutBillsInput>
  }

  export type TenantUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUncheckedUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBillInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBillInput>
  }

  export type TenantCreateWithoutPaymentsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillCreateNestedManyWithoutTenantInput
    delegations?: DelegateCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillUncheckedCreateNestedManyWithoutTenantInput
    delegations?: DelegateUncheckedCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPaymentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
  }

  export type BillCreateWithoutPaymentsInput = {
    id?: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
    tenant: TenantCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
  }

  export type BillCreateOrConnectWithoutPaymentsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
  }

  export type TenantUpsertWithoutPaymentsInput = {
    update: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TenantCreateWithoutPaymentsInput, TenantUncheckedCreateWithoutPaymentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPaymentsInput, TenantUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenantUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUncheckedUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUncheckedUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type BillUpsertWithoutPaymentsInput = {
    update: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
  }

  export type BillUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tenant?: TenantUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AllocatedBillCreateWithoutSharedBillInput = {
    id?: string
    amount: number
    tenant: TenantCreateNestedOneWithoutAllocatedBillsInput
  }

  export type AllocatedBillUncheckedCreateWithoutSharedBillInput = {
    id?: string
    tenantId: string
    amount: number
  }

  export type AllocatedBillCreateOrConnectWithoutSharedBillInput = {
    where: AllocatedBillWhereUniqueInput
    create: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput>
  }

  export type AllocatedBillCreateManySharedBillInputEnvelope = {
    data: AllocatedBillCreateManySharedBillInput | AllocatedBillCreateManySharedBillInput[]
    skipDuplicates?: boolean
  }

  export type AllocatedBillUpsertWithWhereUniqueWithoutSharedBillInput = {
    where: AllocatedBillWhereUniqueInput
    update: XOR<AllocatedBillUpdateWithoutSharedBillInput, AllocatedBillUncheckedUpdateWithoutSharedBillInput>
    create: XOR<AllocatedBillCreateWithoutSharedBillInput, AllocatedBillUncheckedCreateWithoutSharedBillInput>
  }

  export type AllocatedBillUpdateWithWhereUniqueWithoutSharedBillInput = {
    where: AllocatedBillWhereUniqueInput
    data: XOR<AllocatedBillUpdateWithoutSharedBillInput, AllocatedBillUncheckedUpdateWithoutSharedBillInput>
  }

  export type AllocatedBillUpdateManyWithWhereWithoutSharedBillInput = {
    where: AllocatedBillScalarWhereInput
    data: XOR<AllocatedBillUpdateManyMutationInput, AllocatedBillUncheckedUpdateManyWithoutSharedBillInput>
  }

  export type SharedBillCreateWithoutAllocatedBillsInput = {
    id?: string
    name: string
    amount: number
    date: Date | string
  }

  export type SharedBillUncheckedCreateWithoutAllocatedBillsInput = {
    id?: string
    name: string
    amount: number
    date: Date | string
  }

  export type SharedBillCreateOrConnectWithoutAllocatedBillsInput = {
    where: SharedBillWhereUniqueInput
    create: XOR<SharedBillCreateWithoutAllocatedBillsInput, SharedBillUncheckedCreateWithoutAllocatedBillsInput>
  }

  export type TenantCreateWithoutAllocatedBillsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    delegations?: DelegateCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAllocatedBillsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    delegations?: DelegateUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAllocatedBillsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAllocatedBillsInput, TenantUncheckedCreateWithoutAllocatedBillsInput>
  }

  export type SharedBillUpsertWithoutAllocatedBillsInput = {
    update: XOR<SharedBillUpdateWithoutAllocatedBillsInput, SharedBillUncheckedUpdateWithoutAllocatedBillsInput>
    create: XOR<SharedBillCreateWithoutAllocatedBillsInput, SharedBillUncheckedCreateWithoutAllocatedBillsInput>
    where?: SharedBillWhereInput
  }

  export type SharedBillUpdateToOneWithWhereWithoutAllocatedBillsInput = {
    where?: SharedBillWhereInput
    data: XOR<SharedBillUpdateWithoutAllocatedBillsInput, SharedBillUncheckedUpdateWithoutAllocatedBillsInput>
  }

  export type SharedBillUpdateWithoutAllocatedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedBillUncheckedUpdateWithoutAllocatedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutAllocatedBillsInput = {
    update: XOR<TenantUpdateWithoutAllocatedBillsInput, TenantUncheckedUpdateWithoutAllocatedBillsInput>
    create: XOR<TenantCreateWithoutAllocatedBillsInput, TenantUncheckedCreateWithoutAllocatedBillsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAllocatedBillsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAllocatedBillsInput, TenantUncheckedUpdateWithoutAllocatedBillsInput>
  }

  export type TenantUpdateWithoutAllocatedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAllocatedBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    delegations?: DelegateUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutDelegationsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDelegationsInput = {
    id?: string
    name: string
    propertyAddress: string
    imageUrl?: string | null
    bills?: BillUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    allocatedBills?: AllocatedBillUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDelegationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDelegationsInput, TenantUncheckedCreateWithoutDelegationsInput>
  }

  export type TenantUpsertWithoutDelegationsInput = {
    update: XOR<TenantUpdateWithoutDelegationsInput, TenantUncheckedUpdateWithoutDelegationsInput>
    create: XOR<TenantCreateWithoutDelegationsInput, TenantUncheckedCreateWithoutDelegationsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutDelegationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutDelegationsInput, TenantUncheckedUpdateWithoutDelegationsInput>
  }

  export type TenantUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyAddress?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bills?: BillUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    allocatedBills?: AllocatedBillUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type BillCreateManyTenantInput = {
    id?: string
    amount: number
    month: string
    status: string
    dueDate: Date | string
    carriedOverAmount?: number | null
  }

  export type PaymentCreateManyTenantInput = {
    id?: string
    billId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type DelegateCreateManyTenantInput = {
    id?: string
    task: string
  }

  export type AllocatedBillCreateManyTenantInput = {
    id?: string
    sharedBillId: string
    amount: number
  }

  export type BillUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carriedOverAmount?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PaymentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
    bill?: BillUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type DelegateUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
  }

  export type DelegateUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
  }

  export type DelegateUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
  }

  export type AllocatedBillUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    sharedBill?: SharedBillUpdateOneRequiredWithoutAllocatedBillsNestedInput
  }

  export type AllocatedBillUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedBillId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type AllocatedBillUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedBillId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyBillInput = {
    id?: string
    tenantId: string
    amount: number
    paymentDate: Date | string
    receiptId: string
    receiptText: string
  }

  export type PaymentUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptId?: StringFieldUpdateOperationsInput | string
    receiptText?: StringFieldUpdateOperationsInput | string
  }

  export type AllocatedBillCreateManySharedBillInput = {
    id?: string
    tenantId: string
    amount: number
  }

  export type AllocatedBillUpdateWithoutSharedBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    tenant?: TenantUpdateOneRequiredWithoutAllocatedBillsNestedInput
  }

  export type AllocatedBillUncheckedUpdateWithoutSharedBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type AllocatedBillUncheckedUpdateManyWithoutSharedBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }



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