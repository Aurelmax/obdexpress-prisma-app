
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
 * Model DemandesSav
 * 
 */
export type DemandesSav = $Result.DefaultSelection<Prisma.$DemandesSavPayload>
/**
 * Model VehicleInfo
 * 
 */
export type VehicleInfo = $Result.DefaultSelection<Prisma.$VehicleInfoPayload>
/**
 * Model Ville
 * 
 */
export type Ville = $Result.DefaultSelection<Prisma.$VillePayload>
/**
 * Model CitySeodiagnostic
 * 
 */
export type CitySeodiagnostic = $Result.DefaultSelection<Prisma.$CitySeodiagnosticPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Disponibilite
 * 
 */
export type Disponibilite = $Result.DefaultSelection<Prisma.$DisponibilitePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DemandesSavs
 * const demandesSavs = await prisma.demandesSav.findMany()
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
   * // Fetch zero or more DemandesSavs
   * const demandesSavs = await prisma.demandesSav.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.demandesSav`: Exposes CRUD operations for the **DemandesSav** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemandesSavs
    * const demandesSavs = await prisma.demandesSav.findMany()
    * ```
    */
  get demandesSav(): Prisma.DemandesSavDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleInfo`: Exposes CRUD operations for the **VehicleInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleInfos
    * const vehicleInfos = await prisma.vehicleInfo.findMany()
    * ```
    */
  get vehicleInfo(): Prisma.VehicleInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ville`: Exposes CRUD operations for the **Ville** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villes
    * const villes = await prisma.ville.findMany()
    * ```
    */
  get ville(): Prisma.VilleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.citySeodiagnostic`: Exposes CRUD operations for the **CitySeodiagnostic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CitySeodiagnostics
    * const citySeodiagnostics = await prisma.citySeodiagnostic.findMany()
    * ```
    */
  get citySeodiagnostic(): Prisma.CitySeodiagnosticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilite`: Exposes CRUD operations for the **Disponibilite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilites
    * const disponibilites = await prisma.disponibilite.findMany()
    * ```
    */
  get disponibilite(): Prisma.DisponibiliteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    DemandesSav: 'DemandesSav',
    VehicleInfo: 'VehicleInfo',
    Ville: 'Ville',
    CitySeodiagnostic: 'CitySeodiagnostic',
    Reservation: 'Reservation',
    Disponibilite: 'Disponibilite',
    User: 'User',
    Session: 'Session'
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
      modelProps: "demandesSav" | "vehicleInfo" | "ville" | "citySeodiagnostic" | "reservation" | "disponibilite" | "user" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DemandesSav: {
        payload: Prisma.$DemandesSavPayload<ExtArgs>
        fields: Prisma.DemandesSavFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandesSavFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandesSavFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          findFirst: {
            args: Prisma.DemandesSavFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandesSavFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          findMany: {
            args: Prisma.DemandesSavFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>[]
          }
          create: {
            args: Prisma.DemandesSavCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          createMany: {
            args: Prisma.DemandesSavCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandesSavCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>[]
          }
          delete: {
            args: Prisma.DemandesSavDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          update: {
            args: Prisma.DemandesSavUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          deleteMany: {
            args: Prisma.DemandesSavDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandesSavUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandesSavUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>[]
          }
          upsert: {
            args: Prisma.DemandesSavUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandesSavPayload>
          }
          aggregate: {
            args: Prisma.DemandesSavAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemandesSav>
          }
          groupBy: {
            args: Prisma.DemandesSavGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandesSavGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandesSavCountArgs<ExtArgs>
            result: $Utils.Optional<DemandesSavCountAggregateOutputType> | number
          }
        }
      }
      VehicleInfo: {
        payload: Prisma.$VehicleInfoPayload<ExtArgs>
        fields: Prisma.VehicleInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          findFirst: {
            args: Prisma.VehicleInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          findMany: {
            args: Prisma.VehicleInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>[]
          }
          create: {
            args: Prisma.VehicleInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          createMany: {
            args: Prisma.VehicleInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>[]
          }
          delete: {
            args: Prisma.VehicleInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          update: {
            args: Prisma.VehicleInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          deleteMany: {
            args: Prisma.VehicleInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>[]
          }
          upsert: {
            args: Prisma.VehicleInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleInfoPayload>
          }
          aggregate: {
            args: Prisma.VehicleInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleInfo>
          }
          groupBy: {
            args: Prisma.VehicleInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleInfoCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleInfoCountAggregateOutputType> | number
          }
        }
      }
      Ville: {
        payload: Prisma.$VillePayload<ExtArgs>
        fields: Prisma.VilleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VilleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VilleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          findFirst: {
            args: Prisma.VilleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VilleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          findMany: {
            args: Prisma.VilleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>[]
          }
          create: {
            args: Prisma.VilleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          createMany: {
            args: Prisma.VilleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VilleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>[]
          }
          delete: {
            args: Prisma.VilleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          update: {
            args: Prisma.VilleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          deleteMany: {
            args: Prisma.VilleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VilleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VilleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>[]
          }
          upsert: {
            args: Prisma.VilleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillePayload>
          }
          aggregate: {
            args: Prisma.VilleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVille>
          }
          groupBy: {
            args: Prisma.VilleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VilleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VilleCountArgs<ExtArgs>
            result: $Utils.Optional<VilleCountAggregateOutputType> | number
          }
        }
      }
      CitySeodiagnostic: {
        payload: Prisma.$CitySeodiagnosticPayload<ExtArgs>
        fields: Prisma.CitySeodiagnosticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitySeodiagnosticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitySeodiagnosticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          findFirst: {
            args: Prisma.CitySeodiagnosticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitySeodiagnosticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          findMany: {
            args: Prisma.CitySeodiagnosticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>[]
          }
          create: {
            args: Prisma.CitySeodiagnosticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          createMany: {
            args: Prisma.CitySeodiagnosticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitySeodiagnosticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>[]
          }
          delete: {
            args: Prisma.CitySeodiagnosticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          update: {
            args: Prisma.CitySeodiagnosticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          deleteMany: {
            args: Prisma.CitySeodiagnosticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitySeodiagnosticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitySeodiagnosticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>[]
          }
          upsert: {
            args: Prisma.CitySeodiagnosticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitySeodiagnosticPayload>
          }
          aggregate: {
            args: Prisma.CitySeodiagnosticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitySeodiagnostic>
          }
          groupBy: {
            args: Prisma.CitySeodiagnosticGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitySeodiagnosticGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitySeodiagnosticCountArgs<ExtArgs>
            result: $Utils.Optional<CitySeodiagnosticCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
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
      Disponibilite: {
        payload: Prisma.$DisponibilitePayload<ExtArgs>
        fields: Prisma.DisponibiliteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibiliteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibiliteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          findFirst: {
            args: Prisma.DisponibiliteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibiliteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          findMany: {
            args: Prisma.DisponibiliteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>[]
          }
          create: {
            args: Prisma.DisponibiliteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          createMany: {
            args: Prisma.DisponibiliteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibiliteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>[]
          }
          delete: {
            args: Prisma.DisponibiliteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          update: {
            args: Prisma.DisponibiliteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          deleteMany: {
            args: Prisma.DisponibiliteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibiliteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibiliteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>[]
          }
          upsert: {
            args: Prisma.DisponibiliteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilitePayload>
          }
          aggregate: {
            args: Prisma.DisponibiliteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilite>
          }
          groupBy: {
            args: Prisma.DisponibiliteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibiliteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibiliteCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibiliteCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
    demandesSav?: DemandesSavOmit
    vehicleInfo?: VehicleInfoOmit
    ville?: VilleOmit
    citySeodiagnostic?: CitySeodiagnosticOmit
    reservation?: ReservationOmit
    disponibilite?: DisponibiliteOmit
    user?: UserOmit
    session?: SessionOmit
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
   * Count Type VilleCountOutputType
   */

  export type VilleCountOutputType = {
    diagnostics: number
  }

  export type VilleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | VilleCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * VilleCountOutputType without action
   */
  export type VilleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VilleCountOutputType
     */
    select?: VilleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VilleCountOutputType without action
   */
  export type VilleCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitySeodiagnosticWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DemandesSav
   */

  export type AggregateDemandesSav = {
    _count: DemandesSavCountAggregateOutputType | null
    _min: DemandesSavMinAggregateOutputType | null
    _max: DemandesSavMaxAggregateOutputType | null
  }

  export type DemandesSavMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    sujet: string | null
    description: string | null
    fichier_url: string | null
    statut: string | null
    assigne_a: string | null
    notes_internes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DemandesSavMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    sujet: string | null
    description: string | null
    fichier_url: string | null
    statut: string | null
    assigne_a: string | null
    notes_internes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DemandesSavCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    sujet: number
    description: number
    fichier_url: number
    statut: number
    assigne_a: number
    notes_internes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DemandesSavMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    sujet?: true
    description?: true
    fichier_url?: true
    statut?: true
    assigne_a?: true
    notes_internes?: true
    created_at?: true
    updated_at?: true
  }

  export type DemandesSavMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    sujet?: true
    description?: true
    fichier_url?: true
    statut?: true
    assigne_a?: true
    notes_internes?: true
    created_at?: true
    updated_at?: true
  }

  export type DemandesSavCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    sujet?: true
    description?: true
    fichier_url?: true
    statut?: true
    assigne_a?: true
    notes_internes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DemandesSavAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandesSav to aggregate.
     */
    where?: DemandesSavWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandesSavs to fetch.
     */
    orderBy?: DemandesSavOrderByWithRelationInput | DemandesSavOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandesSavWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandesSavs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandesSavs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemandesSavs
    **/
    _count?: true | DemandesSavCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandesSavMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandesSavMaxAggregateInputType
  }

  export type GetDemandesSavAggregateType<T extends DemandesSavAggregateArgs> = {
        [P in keyof T & keyof AggregateDemandesSav]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemandesSav[P]>
      : GetScalarType<T[P], AggregateDemandesSav[P]>
  }




  export type DemandesSavGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandesSavWhereInput
    orderBy?: DemandesSavOrderByWithAggregationInput | DemandesSavOrderByWithAggregationInput[]
    by: DemandesSavScalarFieldEnum[] | DemandesSavScalarFieldEnum
    having?: DemandesSavScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandesSavCountAggregateInputType | true
    _min?: DemandesSavMinAggregateInputType
    _max?: DemandesSavMaxAggregateInputType
  }

  export type DemandesSavGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    sujet: string
    description: string
    fichier_url: string | null
    statut: string
    assigne_a: string | null
    notes_internes: string | null
    created_at: Date
    updated_at: Date
    _count: DemandesSavCountAggregateOutputType | null
    _min: DemandesSavMinAggregateOutputType | null
    _max: DemandesSavMaxAggregateOutputType | null
  }

  type GetDemandesSavGroupByPayload<T extends DemandesSavGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandesSavGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandesSavGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandesSavGroupByOutputType[P]>
            : GetScalarType<T[P], DemandesSavGroupByOutputType[P]>
        }
      >
    >


  export type DemandesSavSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    sujet?: boolean
    description?: boolean
    fichier_url?: boolean
    statut?: boolean
    assigne_a?: boolean
    notes_internes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["demandesSav"]>

  export type DemandesSavSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    sujet?: boolean
    description?: boolean
    fichier_url?: boolean
    statut?: boolean
    assigne_a?: boolean
    notes_internes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["demandesSav"]>

  export type DemandesSavSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    sujet?: boolean
    description?: boolean
    fichier_url?: boolean
    statut?: boolean
    assigne_a?: boolean
    notes_internes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["demandesSav"]>

  export type DemandesSavSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    sujet?: boolean
    description?: boolean
    fichier_url?: boolean
    statut?: boolean
    assigne_a?: boolean
    notes_internes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DemandesSavOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "sujet" | "description" | "fichier_url" | "statut" | "assigne_a" | "notes_internes" | "created_at" | "updated_at", ExtArgs["result"]["demandesSav"]>

  export type $DemandesSavPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemandesSav"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      telephone: string
      sujet: string
      description: string
      fichier_url: string | null
      statut: string
      assigne_a: string | null
      notes_internes: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["demandesSav"]>
    composites: {}
  }

  type DemandesSavGetPayload<S extends boolean | null | undefined | DemandesSavDefaultArgs> = $Result.GetResult<Prisma.$DemandesSavPayload, S>

  type DemandesSavCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandesSavFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandesSavCountAggregateInputType | true
    }

  export interface DemandesSavDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemandesSav'], meta: { name: 'DemandesSav' } }
    /**
     * Find zero or one DemandesSav that matches the filter.
     * @param {DemandesSavFindUniqueArgs} args - Arguments to find a DemandesSav
     * @example
     * // Get one DemandesSav
     * const demandesSav = await prisma.demandesSav.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandesSavFindUniqueArgs>(args: SelectSubset<T, DemandesSavFindUniqueArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemandesSav that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandesSavFindUniqueOrThrowArgs} args - Arguments to find a DemandesSav
     * @example
     * // Get one DemandesSav
     * const demandesSav = await prisma.demandesSav.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandesSavFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandesSavFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandesSav that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavFindFirstArgs} args - Arguments to find a DemandesSav
     * @example
     * // Get one DemandesSav
     * const demandesSav = await prisma.demandesSav.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandesSavFindFirstArgs>(args?: SelectSubset<T, DemandesSavFindFirstArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandesSav that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavFindFirstOrThrowArgs} args - Arguments to find a DemandesSav
     * @example
     * // Get one DemandesSav
     * const demandesSav = await prisma.demandesSav.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandesSavFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandesSavFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemandesSavs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemandesSavs
     * const demandesSavs = await prisma.demandesSav.findMany()
     * 
     * // Get first 10 DemandesSavs
     * const demandesSavs = await prisma.demandesSav.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandesSavWithIdOnly = await prisma.demandesSav.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandesSavFindManyArgs>(args?: SelectSubset<T, DemandesSavFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemandesSav.
     * @param {DemandesSavCreateArgs} args - Arguments to create a DemandesSav.
     * @example
     * // Create one DemandesSav
     * const DemandesSav = await prisma.demandesSav.create({
     *   data: {
     *     // ... data to create a DemandesSav
     *   }
     * })
     * 
     */
    create<T extends DemandesSavCreateArgs>(args: SelectSubset<T, DemandesSavCreateArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemandesSavs.
     * @param {DemandesSavCreateManyArgs} args - Arguments to create many DemandesSavs.
     * @example
     * // Create many DemandesSavs
     * const demandesSav = await prisma.demandesSav.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandesSavCreateManyArgs>(args?: SelectSubset<T, DemandesSavCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DemandesSavs and returns the data saved in the database.
     * @param {DemandesSavCreateManyAndReturnArgs} args - Arguments to create many DemandesSavs.
     * @example
     * // Create many DemandesSavs
     * const demandesSav = await prisma.demandesSav.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DemandesSavs and only return the `id`
     * const demandesSavWithIdOnly = await prisma.demandesSav.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandesSavCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandesSavCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DemandesSav.
     * @param {DemandesSavDeleteArgs} args - Arguments to delete one DemandesSav.
     * @example
     * // Delete one DemandesSav
     * const DemandesSav = await prisma.demandesSav.delete({
     *   where: {
     *     // ... filter to delete one DemandesSav
     *   }
     * })
     * 
     */
    delete<T extends DemandesSavDeleteArgs>(args: SelectSubset<T, DemandesSavDeleteArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemandesSav.
     * @param {DemandesSavUpdateArgs} args - Arguments to update one DemandesSav.
     * @example
     * // Update one DemandesSav
     * const demandesSav = await prisma.demandesSav.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandesSavUpdateArgs>(args: SelectSubset<T, DemandesSavUpdateArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemandesSavs.
     * @param {DemandesSavDeleteManyArgs} args - Arguments to filter DemandesSavs to delete.
     * @example
     * // Delete a few DemandesSavs
     * const { count } = await prisma.demandesSav.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandesSavDeleteManyArgs>(args?: SelectSubset<T, DemandesSavDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandesSavs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemandesSavs
     * const demandesSav = await prisma.demandesSav.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandesSavUpdateManyArgs>(args: SelectSubset<T, DemandesSavUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandesSavs and returns the data updated in the database.
     * @param {DemandesSavUpdateManyAndReturnArgs} args - Arguments to update many DemandesSavs.
     * @example
     * // Update many DemandesSavs
     * const demandesSav = await prisma.demandesSav.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DemandesSavs and only return the `id`
     * const demandesSavWithIdOnly = await prisma.demandesSav.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandesSavUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandesSavUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DemandesSav.
     * @param {DemandesSavUpsertArgs} args - Arguments to update or create a DemandesSav.
     * @example
     * // Update or create a DemandesSav
     * const demandesSav = await prisma.demandesSav.upsert({
     *   create: {
     *     // ... data to create a DemandesSav
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemandesSav we want to update
     *   }
     * })
     */
    upsert<T extends DemandesSavUpsertArgs>(args: SelectSubset<T, DemandesSavUpsertArgs<ExtArgs>>): Prisma__DemandesSavClient<$Result.GetResult<Prisma.$DemandesSavPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DemandesSavs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavCountArgs} args - Arguments to filter DemandesSavs to count.
     * @example
     * // Count the number of DemandesSavs
     * const count = await prisma.demandesSav.count({
     *   where: {
     *     // ... the filter for the DemandesSavs we want to count
     *   }
     * })
    **/
    count<T extends DemandesSavCountArgs>(
      args?: Subset<T, DemandesSavCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandesSavCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemandesSav.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandesSavAggregateArgs>(args: Subset<T, DemandesSavAggregateArgs>): Prisma.PrismaPromise<GetDemandesSavAggregateType<T>>

    /**
     * Group by DemandesSav.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandesSavGroupByArgs} args - Group by arguments.
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
      T extends DemandesSavGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandesSavGroupByArgs['orderBy'] }
        : { orderBy?: DemandesSavGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandesSavGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandesSavGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemandesSav model
   */
  readonly fields: DemandesSavFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemandesSav.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandesSavClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DemandesSav model
   */
  interface DemandesSavFieldRefs {
    readonly id: FieldRef<"DemandesSav", 'String'>
    readonly nom: FieldRef<"DemandesSav", 'String'>
    readonly prenom: FieldRef<"DemandesSav", 'String'>
    readonly email: FieldRef<"DemandesSav", 'String'>
    readonly telephone: FieldRef<"DemandesSav", 'String'>
    readonly sujet: FieldRef<"DemandesSav", 'String'>
    readonly description: FieldRef<"DemandesSav", 'String'>
    readonly fichier_url: FieldRef<"DemandesSav", 'String'>
    readonly statut: FieldRef<"DemandesSav", 'String'>
    readonly assigne_a: FieldRef<"DemandesSav", 'String'>
    readonly notes_internes: FieldRef<"DemandesSav", 'String'>
    readonly created_at: FieldRef<"DemandesSav", 'DateTime'>
    readonly updated_at: FieldRef<"DemandesSav", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemandesSav findUnique
   */
  export type DemandesSavFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter, which DemandesSav to fetch.
     */
    where: DemandesSavWhereUniqueInput
  }

  /**
   * DemandesSav findUniqueOrThrow
   */
  export type DemandesSavFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter, which DemandesSav to fetch.
     */
    where: DemandesSavWhereUniqueInput
  }

  /**
   * DemandesSav findFirst
   */
  export type DemandesSavFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter, which DemandesSav to fetch.
     */
    where?: DemandesSavWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandesSavs to fetch.
     */
    orderBy?: DemandesSavOrderByWithRelationInput | DemandesSavOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandesSavs.
     */
    cursor?: DemandesSavWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandesSavs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandesSavs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandesSavs.
     */
    distinct?: DemandesSavScalarFieldEnum | DemandesSavScalarFieldEnum[]
  }

  /**
   * DemandesSav findFirstOrThrow
   */
  export type DemandesSavFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter, which DemandesSav to fetch.
     */
    where?: DemandesSavWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandesSavs to fetch.
     */
    orderBy?: DemandesSavOrderByWithRelationInput | DemandesSavOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandesSavs.
     */
    cursor?: DemandesSavWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandesSavs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandesSavs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandesSavs.
     */
    distinct?: DemandesSavScalarFieldEnum | DemandesSavScalarFieldEnum[]
  }

  /**
   * DemandesSav findMany
   */
  export type DemandesSavFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter, which DemandesSavs to fetch.
     */
    where?: DemandesSavWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandesSavs to fetch.
     */
    orderBy?: DemandesSavOrderByWithRelationInput | DemandesSavOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemandesSavs.
     */
    cursor?: DemandesSavWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandesSavs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandesSavs.
     */
    skip?: number
    distinct?: DemandesSavScalarFieldEnum | DemandesSavScalarFieldEnum[]
  }

  /**
   * DemandesSav create
   */
  export type DemandesSavCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * The data needed to create a DemandesSav.
     */
    data: XOR<DemandesSavCreateInput, DemandesSavUncheckedCreateInput>
  }

  /**
   * DemandesSav createMany
   */
  export type DemandesSavCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemandesSavs.
     */
    data: DemandesSavCreateManyInput | DemandesSavCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemandesSav createManyAndReturn
   */
  export type DemandesSavCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * The data used to create many DemandesSavs.
     */
    data: DemandesSavCreateManyInput | DemandesSavCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemandesSav update
   */
  export type DemandesSavUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * The data needed to update a DemandesSav.
     */
    data: XOR<DemandesSavUpdateInput, DemandesSavUncheckedUpdateInput>
    /**
     * Choose, which DemandesSav to update.
     */
    where: DemandesSavWhereUniqueInput
  }

  /**
   * DemandesSav updateMany
   */
  export type DemandesSavUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemandesSavs.
     */
    data: XOR<DemandesSavUpdateManyMutationInput, DemandesSavUncheckedUpdateManyInput>
    /**
     * Filter which DemandesSavs to update
     */
    where?: DemandesSavWhereInput
    /**
     * Limit how many DemandesSavs to update.
     */
    limit?: number
  }

  /**
   * DemandesSav updateManyAndReturn
   */
  export type DemandesSavUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * The data used to update DemandesSavs.
     */
    data: XOR<DemandesSavUpdateManyMutationInput, DemandesSavUncheckedUpdateManyInput>
    /**
     * Filter which DemandesSavs to update
     */
    where?: DemandesSavWhereInput
    /**
     * Limit how many DemandesSavs to update.
     */
    limit?: number
  }

  /**
   * DemandesSav upsert
   */
  export type DemandesSavUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * The filter to search for the DemandesSav to update in case it exists.
     */
    where: DemandesSavWhereUniqueInput
    /**
     * In case the DemandesSav found by the `where` argument doesn't exist, create a new DemandesSav with this data.
     */
    create: XOR<DemandesSavCreateInput, DemandesSavUncheckedCreateInput>
    /**
     * In case the DemandesSav was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandesSavUpdateInput, DemandesSavUncheckedUpdateInput>
  }

  /**
   * DemandesSav delete
   */
  export type DemandesSavDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
    /**
     * Filter which DemandesSav to delete.
     */
    where: DemandesSavWhereUniqueInput
  }

  /**
   * DemandesSav deleteMany
   */
  export type DemandesSavDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandesSavs to delete
     */
    where?: DemandesSavWhereInput
    /**
     * Limit how many DemandesSavs to delete.
     */
    limit?: number
  }

  /**
   * DemandesSav without action
   */
  export type DemandesSavDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandesSav
     */
    select?: DemandesSavSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandesSav
     */
    omit?: DemandesSavOmit<ExtArgs> | null
  }


  /**
   * Model VehicleInfo
   */

  export type AggregateVehicleInfo = {
    _count: VehicleInfoCountAggregateOutputType | null
    _min: VehicleInfoMinAggregateOutputType | null
    _max: VehicleInfoMaxAggregateOutputType | null
  }

  export type VehicleInfoMinAggregateOutputType = {
    id: string | null
    plate: string | null
    marque: string | null
    modele: string | null
    carrosserie: string | null
    couleur: string | null
    energie: string | null
    annee: string | null
    puissance_fiscale: string | null
    puissance_din: string | null
    nombre_places: string | null
    date_mise_en_circulation: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VehicleInfoMaxAggregateOutputType = {
    id: string | null
    plate: string | null
    marque: string | null
    modele: string | null
    carrosserie: string | null
    couleur: string | null
    energie: string | null
    annee: string | null
    puissance_fiscale: string | null
    puissance_din: string | null
    nombre_places: string | null
    date_mise_en_circulation: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VehicleInfoCountAggregateOutputType = {
    id: number
    plate: number
    marque: number
    modele: number
    carrosserie: number
    couleur: number
    energie: number
    annee: number
    puissance_fiscale: number
    puissance_din: number
    nombre_places: number
    date_mise_en_circulation: number
    donnees_brutes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VehicleInfoMinAggregateInputType = {
    id?: true
    plate?: true
    marque?: true
    modele?: true
    carrosserie?: true
    couleur?: true
    energie?: true
    annee?: true
    puissance_fiscale?: true
    puissance_din?: true
    nombre_places?: true
    date_mise_en_circulation?: true
    created_at?: true
    updated_at?: true
  }

  export type VehicleInfoMaxAggregateInputType = {
    id?: true
    plate?: true
    marque?: true
    modele?: true
    carrosserie?: true
    couleur?: true
    energie?: true
    annee?: true
    puissance_fiscale?: true
    puissance_din?: true
    nombre_places?: true
    date_mise_en_circulation?: true
    created_at?: true
    updated_at?: true
  }

  export type VehicleInfoCountAggregateInputType = {
    id?: true
    plate?: true
    marque?: true
    modele?: true
    carrosserie?: true
    couleur?: true
    energie?: true
    annee?: true
    puissance_fiscale?: true
    puissance_din?: true
    nombre_places?: true
    date_mise_en_circulation?: true
    donnees_brutes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VehicleInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleInfo to aggregate.
     */
    where?: VehicleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleInfos to fetch.
     */
    orderBy?: VehicleInfoOrderByWithRelationInput | VehicleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleInfos
    **/
    _count?: true | VehicleInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleInfoMaxAggregateInputType
  }

  export type GetVehicleInfoAggregateType<T extends VehicleInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleInfo[P]>
      : GetScalarType<T[P], AggregateVehicleInfo[P]>
  }




  export type VehicleInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleInfoWhereInput
    orderBy?: VehicleInfoOrderByWithAggregationInput | VehicleInfoOrderByWithAggregationInput[]
    by: VehicleInfoScalarFieldEnum[] | VehicleInfoScalarFieldEnum
    having?: VehicleInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleInfoCountAggregateInputType | true
    _min?: VehicleInfoMinAggregateInputType
    _max?: VehicleInfoMaxAggregateInputType
  }

  export type VehicleInfoGroupByOutputType = {
    id: string
    plate: string
    marque: string | null
    modele: string | null
    carrosserie: string | null
    couleur: string | null
    energie: string | null
    annee: string | null
    puissance_fiscale: string | null
    puissance_din: string | null
    nombre_places: string | null
    date_mise_en_circulation: string | null
    donnees_brutes: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: VehicleInfoCountAggregateOutputType | null
    _min: VehicleInfoMinAggregateOutputType | null
    _max: VehicleInfoMaxAggregateOutputType | null
  }

  type GetVehicleInfoGroupByPayload<T extends VehicleInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleInfoGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleInfoGroupByOutputType[P]>
        }
      >
    >


  export type VehicleInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    marque?: boolean
    modele?: boolean
    carrosserie?: boolean
    couleur?: boolean
    energie?: boolean
    annee?: boolean
    puissance_fiscale?: boolean
    puissance_din?: boolean
    nombre_places?: boolean
    date_mise_en_circulation?: boolean
    donnees_brutes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vehicleInfo"]>

  export type VehicleInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    marque?: boolean
    modele?: boolean
    carrosserie?: boolean
    couleur?: boolean
    energie?: boolean
    annee?: boolean
    puissance_fiscale?: boolean
    puissance_din?: boolean
    nombre_places?: boolean
    date_mise_en_circulation?: boolean
    donnees_brutes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vehicleInfo"]>

  export type VehicleInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    marque?: boolean
    modele?: boolean
    carrosserie?: boolean
    couleur?: boolean
    energie?: boolean
    annee?: boolean
    puissance_fiscale?: boolean
    puissance_din?: boolean
    nombre_places?: boolean
    date_mise_en_circulation?: boolean
    donnees_brutes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vehicleInfo"]>

  export type VehicleInfoSelectScalar = {
    id?: boolean
    plate?: boolean
    marque?: boolean
    modele?: boolean
    carrosserie?: boolean
    couleur?: boolean
    energie?: boolean
    annee?: boolean
    puissance_fiscale?: boolean
    puissance_din?: boolean
    nombre_places?: boolean
    date_mise_en_circulation?: boolean
    donnees_brutes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VehicleInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plate" | "marque" | "modele" | "carrosserie" | "couleur" | "energie" | "annee" | "puissance_fiscale" | "puissance_din" | "nombre_places" | "date_mise_en_circulation" | "donnees_brutes" | "created_at" | "updated_at", ExtArgs["result"]["vehicleInfo"]>

  export type $VehicleInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plate: string
      marque: string | null
      modele: string | null
      carrosserie: string | null
      couleur: string | null
      energie: string | null
      annee: string | null
      puissance_fiscale: string | null
      puissance_din: string | null
      nombre_places: string | null
      date_mise_en_circulation: string | null
      donnees_brutes: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vehicleInfo"]>
    composites: {}
  }

  type VehicleInfoGetPayload<S extends boolean | null | undefined | VehicleInfoDefaultArgs> = $Result.GetResult<Prisma.$VehicleInfoPayload, S>

  type VehicleInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleInfoCountAggregateInputType | true
    }

  export interface VehicleInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleInfo'], meta: { name: 'VehicleInfo' } }
    /**
     * Find zero or one VehicleInfo that matches the filter.
     * @param {VehicleInfoFindUniqueArgs} args - Arguments to find a VehicleInfo
     * @example
     * // Get one VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleInfoFindUniqueArgs>(args: SelectSubset<T, VehicleInfoFindUniqueArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleInfoFindUniqueOrThrowArgs} args - Arguments to find a VehicleInfo
     * @example
     * // Get one VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoFindFirstArgs} args - Arguments to find a VehicleInfo
     * @example
     * // Get one VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleInfoFindFirstArgs>(args?: SelectSubset<T, VehicleInfoFindFirstArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoFindFirstOrThrowArgs} args - Arguments to find a VehicleInfo
     * @example
     * // Get one VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleInfos
     * const vehicleInfos = await prisma.vehicleInfo.findMany()
     * 
     * // Get first 10 VehicleInfos
     * const vehicleInfos = await prisma.vehicleInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleInfoWithIdOnly = await prisma.vehicleInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleInfoFindManyArgs>(args?: SelectSubset<T, VehicleInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleInfo.
     * @param {VehicleInfoCreateArgs} args - Arguments to create a VehicleInfo.
     * @example
     * // Create one VehicleInfo
     * const VehicleInfo = await prisma.vehicleInfo.create({
     *   data: {
     *     // ... data to create a VehicleInfo
     *   }
     * })
     * 
     */
    create<T extends VehicleInfoCreateArgs>(args: SelectSubset<T, VehicleInfoCreateArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleInfos.
     * @param {VehicleInfoCreateManyArgs} args - Arguments to create many VehicleInfos.
     * @example
     * // Create many VehicleInfos
     * const vehicleInfo = await prisma.vehicleInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleInfoCreateManyArgs>(args?: SelectSubset<T, VehicleInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleInfos and returns the data saved in the database.
     * @param {VehicleInfoCreateManyAndReturnArgs} args - Arguments to create many VehicleInfos.
     * @example
     * // Create many VehicleInfos
     * const vehicleInfo = await prisma.vehicleInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleInfos and only return the `id`
     * const vehicleInfoWithIdOnly = await prisma.vehicleInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleInfo.
     * @param {VehicleInfoDeleteArgs} args - Arguments to delete one VehicleInfo.
     * @example
     * // Delete one VehicleInfo
     * const VehicleInfo = await prisma.vehicleInfo.delete({
     *   where: {
     *     // ... filter to delete one VehicleInfo
     *   }
     * })
     * 
     */
    delete<T extends VehicleInfoDeleteArgs>(args: SelectSubset<T, VehicleInfoDeleteArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleInfo.
     * @param {VehicleInfoUpdateArgs} args - Arguments to update one VehicleInfo.
     * @example
     * // Update one VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleInfoUpdateArgs>(args: SelectSubset<T, VehicleInfoUpdateArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleInfos.
     * @param {VehicleInfoDeleteManyArgs} args - Arguments to filter VehicleInfos to delete.
     * @example
     * // Delete a few VehicleInfos
     * const { count } = await prisma.vehicleInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleInfoDeleteManyArgs>(args?: SelectSubset<T, VehicleInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleInfos
     * const vehicleInfo = await prisma.vehicleInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleInfoUpdateManyArgs>(args: SelectSubset<T, VehicleInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleInfos and returns the data updated in the database.
     * @param {VehicleInfoUpdateManyAndReturnArgs} args - Arguments to update many VehicleInfos.
     * @example
     * // Update many VehicleInfos
     * const vehicleInfo = await prisma.vehicleInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleInfos and only return the `id`
     * const vehicleInfoWithIdOnly = await prisma.vehicleInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleInfo.
     * @param {VehicleInfoUpsertArgs} args - Arguments to update or create a VehicleInfo.
     * @example
     * // Update or create a VehicleInfo
     * const vehicleInfo = await prisma.vehicleInfo.upsert({
     *   create: {
     *     // ... data to create a VehicleInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleInfo we want to update
     *   }
     * })
     */
    upsert<T extends VehicleInfoUpsertArgs>(args: SelectSubset<T, VehicleInfoUpsertArgs<ExtArgs>>): Prisma__VehicleInfoClient<$Result.GetResult<Prisma.$VehicleInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoCountArgs} args - Arguments to filter VehicleInfos to count.
     * @example
     * // Count the number of VehicleInfos
     * const count = await prisma.vehicleInfo.count({
     *   where: {
     *     // ... the filter for the VehicleInfos we want to count
     *   }
     * })
    **/
    count<T extends VehicleInfoCountArgs>(
      args?: Subset<T, VehicleInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleInfoAggregateArgs>(args: Subset<T, VehicleInfoAggregateArgs>): Prisma.PrismaPromise<GetVehicleInfoAggregateType<T>>

    /**
     * Group by VehicleInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleInfoGroupByArgs} args - Group by arguments.
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
      T extends VehicleInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleInfoGroupByArgs['orderBy'] }
        : { orderBy?: VehicleInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleInfo model
   */
  readonly fields: VehicleInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VehicleInfo model
   */
  interface VehicleInfoFieldRefs {
    readonly id: FieldRef<"VehicleInfo", 'String'>
    readonly plate: FieldRef<"VehicleInfo", 'String'>
    readonly marque: FieldRef<"VehicleInfo", 'String'>
    readonly modele: FieldRef<"VehicleInfo", 'String'>
    readonly carrosserie: FieldRef<"VehicleInfo", 'String'>
    readonly couleur: FieldRef<"VehicleInfo", 'String'>
    readonly energie: FieldRef<"VehicleInfo", 'String'>
    readonly annee: FieldRef<"VehicleInfo", 'String'>
    readonly puissance_fiscale: FieldRef<"VehicleInfo", 'String'>
    readonly puissance_din: FieldRef<"VehicleInfo", 'String'>
    readonly nombre_places: FieldRef<"VehicleInfo", 'String'>
    readonly date_mise_en_circulation: FieldRef<"VehicleInfo", 'String'>
    readonly donnees_brutes: FieldRef<"VehicleInfo", 'Json'>
    readonly created_at: FieldRef<"VehicleInfo", 'DateTime'>
    readonly updated_at: FieldRef<"VehicleInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleInfo findUnique
   */
  export type VehicleInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter, which VehicleInfo to fetch.
     */
    where: VehicleInfoWhereUniqueInput
  }

  /**
   * VehicleInfo findUniqueOrThrow
   */
  export type VehicleInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter, which VehicleInfo to fetch.
     */
    where: VehicleInfoWhereUniqueInput
  }

  /**
   * VehicleInfo findFirst
   */
  export type VehicleInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter, which VehicleInfo to fetch.
     */
    where?: VehicleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleInfos to fetch.
     */
    orderBy?: VehicleInfoOrderByWithRelationInput | VehicleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleInfos.
     */
    cursor?: VehicleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleInfos.
     */
    distinct?: VehicleInfoScalarFieldEnum | VehicleInfoScalarFieldEnum[]
  }

  /**
   * VehicleInfo findFirstOrThrow
   */
  export type VehicleInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter, which VehicleInfo to fetch.
     */
    where?: VehicleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleInfos to fetch.
     */
    orderBy?: VehicleInfoOrderByWithRelationInput | VehicleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleInfos.
     */
    cursor?: VehicleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleInfos.
     */
    distinct?: VehicleInfoScalarFieldEnum | VehicleInfoScalarFieldEnum[]
  }

  /**
   * VehicleInfo findMany
   */
  export type VehicleInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter, which VehicleInfos to fetch.
     */
    where?: VehicleInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleInfos to fetch.
     */
    orderBy?: VehicleInfoOrderByWithRelationInput | VehicleInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleInfos.
     */
    cursor?: VehicleInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleInfos.
     */
    skip?: number
    distinct?: VehicleInfoScalarFieldEnum | VehicleInfoScalarFieldEnum[]
  }

  /**
   * VehicleInfo create
   */
  export type VehicleInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a VehicleInfo.
     */
    data: XOR<VehicleInfoCreateInput, VehicleInfoUncheckedCreateInput>
  }

  /**
   * VehicleInfo createMany
   */
  export type VehicleInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleInfos.
     */
    data: VehicleInfoCreateManyInput | VehicleInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleInfo createManyAndReturn
   */
  export type VehicleInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleInfos.
     */
    data: VehicleInfoCreateManyInput | VehicleInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleInfo update
   */
  export type VehicleInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a VehicleInfo.
     */
    data: XOR<VehicleInfoUpdateInput, VehicleInfoUncheckedUpdateInput>
    /**
     * Choose, which VehicleInfo to update.
     */
    where: VehicleInfoWhereUniqueInput
  }

  /**
   * VehicleInfo updateMany
   */
  export type VehicleInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleInfos.
     */
    data: XOR<VehicleInfoUpdateManyMutationInput, VehicleInfoUncheckedUpdateManyInput>
    /**
     * Filter which VehicleInfos to update
     */
    where?: VehicleInfoWhereInput
    /**
     * Limit how many VehicleInfos to update.
     */
    limit?: number
  }

  /**
   * VehicleInfo updateManyAndReturn
   */
  export type VehicleInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * The data used to update VehicleInfos.
     */
    data: XOR<VehicleInfoUpdateManyMutationInput, VehicleInfoUncheckedUpdateManyInput>
    /**
     * Filter which VehicleInfos to update
     */
    where?: VehicleInfoWhereInput
    /**
     * Limit how many VehicleInfos to update.
     */
    limit?: number
  }

  /**
   * VehicleInfo upsert
   */
  export type VehicleInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the VehicleInfo to update in case it exists.
     */
    where: VehicleInfoWhereUniqueInput
    /**
     * In case the VehicleInfo found by the `where` argument doesn't exist, create a new VehicleInfo with this data.
     */
    create: XOR<VehicleInfoCreateInput, VehicleInfoUncheckedCreateInput>
    /**
     * In case the VehicleInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleInfoUpdateInput, VehicleInfoUncheckedUpdateInput>
  }

  /**
   * VehicleInfo delete
   */
  export type VehicleInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
    /**
     * Filter which VehicleInfo to delete.
     */
    where: VehicleInfoWhereUniqueInput
  }

  /**
   * VehicleInfo deleteMany
   */
  export type VehicleInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleInfos to delete
     */
    where?: VehicleInfoWhereInput
    /**
     * Limit how many VehicleInfos to delete.
     */
    limit?: number
  }

  /**
   * VehicleInfo without action
   */
  export type VehicleInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleInfo
     */
    select?: VehicleInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleInfo
     */
    omit?: VehicleInfoOmit<ExtArgs> | null
  }


  /**
   * Model Ville
   */

  export type AggregateVille = {
    _count: VilleCountAggregateOutputType | null
    _avg: VilleAvgAggregateOutputType | null
    _sum: VilleSumAggregateOutputType | null
    _min: VilleMinAggregateOutputType | null
    _max: VilleMaxAggregateOutputType | null
  }

  export type VilleAvgAggregateOutputType = {
    population: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    visites: number | null
    conversions: number | null
  }

  export type VilleSumAggregateOutputType = {
    population: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    visites: number | null
    conversions: number | null
  }

  export type VilleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    nom: string | null
    region: string | null
    departement: string | null
    code_postal: string | null
    population: number | null
    meta_title: string | null
    meta_description: string | null
    introduction: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    visites: number | null
    conversions: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VilleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    nom: string | null
    region: string | null
    departement: string | null
    code_postal: string | null
    population: number | null
    meta_title: string | null
    meta_description: string | null
    introduction: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    visites: number | null
    conversions: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VilleCountAggregateOutputType = {
    id: number
    slug: number
    nom: number
    region: number
    departement: number
    code_postal: number
    population: number
    meta_title: number
    meta_description: number
    introduction: number
    avantages_locaux: number
    prix_specifiques: number
    points_interet: number
    latitude: number
    longitude: number
    visites: number
    conversions: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VilleAvgAggregateInputType = {
    population?: true
    latitude?: true
    longitude?: true
    visites?: true
    conversions?: true
  }

  export type VilleSumAggregateInputType = {
    population?: true
    latitude?: true
    longitude?: true
    visites?: true
    conversions?: true
  }

  export type VilleMinAggregateInputType = {
    id?: true
    slug?: true
    nom?: true
    region?: true
    departement?: true
    code_postal?: true
    population?: true
    meta_title?: true
    meta_description?: true
    introduction?: true
    latitude?: true
    longitude?: true
    visites?: true
    conversions?: true
    created_at?: true
    updated_at?: true
  }

  export type VilleMaxAggregateInputType = {
    id?: true
    slug?: true
    nom?: true
    region?: true
    departement?: true
    code_postal?: true
    population?: true
    meta_title?: true
    meta_description?: true
    introduction?: true
    latitude?: true
    longitude?: true
    visites?: true
    conversions?: true
    created_at?: true
    updated_at?: true
  }

  export type VilleCountAggregateInputType = {
    id?: true
    slug?: true
    nom?: true
    region?: true
    departement?: true
    code_postal?: true
    population?: true
    meta_title?: true
    meta_description?: true
    introduction?: true
    avantages_locaux?: true
    prix_specifiques?: true
    points_interet?: true
    latitude?: true
    longitude?: true
    visites?: true
    conversions?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VilleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ville to aggregate.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villes
    **/
    _count?: true | VilleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VilleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VilleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VilleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VilleMaxAggregateInputType
  }

  export type GetVilleAggregateType<T extends VilleAggregateArgs> = {
        [P in keyof T & keyof AggregateVille]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVille[P]>
      : GetScalarType<T[P], AggregateVille[P]>
  }




  export type VilleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VilleWhereInput
    orderBy?: VilleOrderByWithAggregationInput | VilleOrderByWithAggregationInput[]
    by: VilleScalarFieldEnum[] | VilleScalarFieldEnum
    having?: VilleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VilleCountAggregateInputType | true
    _avg?: VilleAvgAggregateInputType
    _sum?: VilleSumAggregateInputType
    _min?: VilleMinAggregateInputType
    _max?: VilleMaxAggregateInputType
  }

  export type VilleGroupByOutputType = {
    id: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux: string[]
    prix_specifiques: JsonValue
    points_interet: JsonValue
    latitude: Decimal | null
    longitude: Decimal | null
    visites: number
    conversions: number
    created_at: Date
    updated_at: Date
    _count: VilleCountAggregateOutputType | null
    _avg: VilleAvgAggregateOutputType | null
    _sum: VilleSumAggregateOutputType | null
    _min: VilleMinAggregateOutputType | null
    _max: VilleMaxAggregateOutputType | null
  }

  type GetVilleGroupByPayload<T extends VilleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VilleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VilleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VilleGroupByOutputType[P]>
            : GetScalarType<T[P], VilleGroupByOutputType[P]>
        }
      >
    >


  export type VilleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nom?: boolean
    region?: boolean
    departement?: boolean
    code_postal?: boolean
    population?: boolean
    meta_title?: boolean
    meta_description?: boolean
    introduction?: boolean
    avantages_locaux?: boolean
    prix_specifiques?: boolean
    points_interet?: boolean
    latitude?: boolean
    longitude?: boolean
    visites?: boolean
    conversions?: boolean
    created_at?: boolean
    updated_at?: boolean
    diagnostics?: boolean | Ville$diagnosticsArgs<ExtArgs>
    _count?: boolean | VilleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ville"]>

  export type VilleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nom?: boolean
    region?: boolean
    departement?: boolean
    code_postal?: boolean
    population?: boolean
    meta_title?: boolean
    meta_description?: boolean
    introduction?: boolean
    avantages_locaux?: boolean
    prix_specifiques?: boolean
    points_interet?: boolean
    latitude?: boolean
    longitude?: boolean
    visites?: boolean
    conversions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ville"]>

  export type VilleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nom?: boolean
    region?: boolean
    departement?: boolean
    code_postal?: boolean
    population?: boolean
    meta_title?: boolean
    meta_description?: boolean
    introduction?: boolean
    avantages_locaux?: boolean
    prix_specifiques?: boolean
    points_interet?: boolean
    latitude?: boolean
    longitude?: boolean
    visites?: boolean
    conversions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ville"]>

  export type VilleSelectScalar = {
    id?: boolean
    slug?: boolean
    nom?: boolean
    region?: boolean
    departement?: boolean
    code_postal?: boolean
    population?: boolean
    meta_title?: boolean
    meta_description?: boolean
    introduction?: boolean
    avantages_locaux?: boolean
    prix_specifiques?: boolean
    points_interet?: boolean
    latitude?: boolean
    longitude?: boolean
    visites?: boolean
    conversions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VilleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "nom" | "region" | "departement" | "code_postal" | "population" | "meta_title" | "meta_description" | "introduction" | "avantages_locaux" | "prix_specifiques" | "points_interet" | "latitude" | "longitude" | "visites" | "conversions" | "created_at" | "updated_at", ExtArgs["result"]["ville"]>
  export type VilleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | Ville$diagnosticsArgs<ExtArgs>
    _count?: boolean | VilleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VilleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VilleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VillePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ville"
    objects: {
      diagnostics: Prisma.$CitySeodiagnosticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      nom: string
      region: string
      departement: string
      code_postal: string
      population: number | null
      meta_title: string
      meta_description: string
      introduction: string
      avantages_locaux: string[]
      prix_specifiques: Prisma.JsonValue
      points_interet: Prisma.JsonValue
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      visites: number
      conversions: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ville"]>
    composites: {}
  }

  type VilleGetPayload<S extends boolean | null | undefined | VilleDefaultArgs> = $Result.GetResult<Prisma.$VillePayload, S>

  type VilleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VilleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VilleCountAggregateInputType | true
    }

  export interface VilleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ville'], meta: { name: 'Ville' } }
    /**
     * Find zero or one Ville that matches the filter.
     * @param {VilleFindUniqueArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VilleFindUniqueArgs>(args: SelectSubset<T, VilleFindUniqueArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ville that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VilleFindUniqueOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VilleFindUniqueOrThrowArgs>(args: SelectSubset<T, VilleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ville that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VilleFindFirstArgs>(args?: SelectSubset<T, VilleFindFirstArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ville that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindFirstOrThrowArgs} args - Arguments to find a Ville
     * @example
     * // Get one Ville
     * const ville = await prisma.ville.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VilleFindFirstOrThrowArgs>(args?: SelectSubset<T, VilleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villes
     * const villes = await prisma.ville.findMany()
     * 
     * // Get first 10 Villes
     * const villes = await prisma.ville.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villeWithIdOnly = await prisma.ville.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VilleFindManyArgs>(args?: SelectSubset<T, VilleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ville.
     * @param {VilleCreateArgs} args - Arguments to create a Ville.
     * @example
     * // Create one Ville
     * const Ville = await prisma.ville.create({
     *   data: {
     *     // ... data to create a Ville
     *   }
     * })
     * 
     */
    create<T extends VilleCreateArgs>(args: SelectSubset<T, VilleCreateArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villes.
     * @param {VilleCreateManyArgs} args - Arguments to create many Villes.
     * @example
     * // Create many Villes
     * const ville = await prisma.ville.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VilleCreateManyArgs>(args?: SelectSubset<T, VilleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Villes and returns the data saved in the database.
     * @param {VilleCreateManyAndReturnArgs} args - Arguments to create many Villes.
     * @example
     * // Create many Villes
     * const ville = await prisma.ville.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Villes and only return the `id`
     * const villeWithIdOnly = await prisma.ville.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VilleCreateManyAndReturnArgs>(args?: SelectSubset<T, VilleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ville.
     * @param {VilleDeleteArgs} args - Arguments to delete one Ville.
     * @example
     * // Delete one Ville
     * const Ville = await prisma.ville.delete({
     *   where: {
     *     // ... filter to delete one Ville
     *   }
     * })
     * 
     */
    delete<T extends VilleDeleteArgs>(args: SelectSubset<T, VilleDeleteArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ville.
     * @param {VilleUpdateArgs} args - Arguments to update one Ville.
     * @example
     * // Update one Ville
     * const ville = await prisma.ville.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VilleUpdateArgs>(args: SelectSubset<T, VilleUpdateArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villes.
     * @param {VilleDeleteManyArgs} args - Arguments to filter Villes to delete.
     * @example
     * // Delete a few Villes
     * const { count } = await prisma.ville.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VilleDeleteManyArgs>(args?: SelectSubset<T, VilleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villes
     * const ville = await prisma.ville.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VilleUpdateManyArgs>(args: SelectSubset<T, VilleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villes and returns the data updated in the database.
     * @param {VilleUpdateManyAndReturnArgs} args - Arguments to update many Villes.
     * @example
     * // Update many Villes
     * const ville = await prisma.ville.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Villes and only return the `id`
     * const villeWithIdOnly = await prisma.ville.updateManyAndReturn({
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
    updateManyAndReturn<T extends VilleUpdateManyAndReturnArgs>(args: SelectSubset<T, VilleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ville.
     * @param {VilleUpsertArgs} args - Arguments to update or create a Ville.
     * @example
     * // Update or create a Ville
     * const ville = await prisma.ville.upsert({
     *   create: {
     *     // ... data to create a Ville
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ville we want to update
     *   }
     * })
     */
    upsert<T extends VilleUpsertArgs>(args: SelectSubset<T, VilleUpsertArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Villes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleCountArgs} args - Arguments to filter Villes to count.
     * @example
     * // Count the number of Villes
     * const count = await prisma.ville.count({
     *   where: {
     *     // ... the filter for the Villes we want to count
     *   }
     * })
    **/
    count<T extends VilleCountArgs>(
      args?: Subset<T, VilleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VilleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VilleAggregateArgs>(args: Subset<T, VilleAggregateArgs>): Prisma.PrismaPromise<GetVilleAggregateType<T>>

    /**
     * Group by Ville.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VilleGroupByArgs} args - Group by arguments.
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
      T extends VilleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VilleGroupByArgs['orderBy'] }
        : { orderBy?: VilleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ville model
   */
  readonly fields: VilleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ville.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VilleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostics<T extends Ville$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, Ville$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ville model
   */
  interface VilleFieldRefs {
    readonly id: FieldRef<"Ville", 'String'>
    readonly slug: FieldRef<"Ville", 'String'>
    readonly nom: FieldRef<"Ville", 'String'>
    readonly region: FieldRef<"Ville", 'String'>
    readonly departement: FieldRef<"Ville", 'String'>
    readonly code_postal: FieldRef<"Ville", 'String'>
    readonly population: FieldRef<"Ville", 'Int'>
    readonly meta_title: FieldRef<"Ville", 'String'>
    readonly meta_description: FieldRef<"Ville", 'String'>
    readonly introduction: FieldRef<"Ville", 'String'>
    readonly avantages_locaux: FieldRef<"Ville", 'String[]'>
    readonly prix_specifiques: FieldRef<"Ville", 'Json'>
    readonly points_interet: FieldRef<"Ville", 'Json'>
    readonly latitude: FieldRef<"Ville", 'Decimal'>
    readonly longitude: FieldRef<"Ville", 'Decimal'>
    readonly visites: FieldRef<"Ville", 'Int'>
    readonly conversions: FieldRef<"Ville", 'Int'>
    readonly created_at: FieldRef<"Ville", 'DateTime'>
    readonly updated_at: FieldRef<"Ville", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ville findUnique
   */
  export type VilleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where: VilleWhereUniqueInput
  }

  /**
   * Ville findUniqueOrThrow
   */
  export type VilleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where: VilleWhereUniqueInput
  }

  /**
   * Ville findFirst
   */
  export type VilleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villes.
     */
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }

  /**
   * Ville findFirstOrThrow
   */
  export type VilleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Ville to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villes.
     */
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }

  /**
   * Ville findMany
   */
  export type VilleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter, which Villes to fetch.
     */
    where?: VilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villes to fetch.
     */
    orderBy?: VilleOrderByWithRelationInput | VilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villes.
     */
    cursor?: VilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villes.
     */
    skip?: number
    distinct?: VilleScalarFieldEnum | VilleScalarFieldEnum[]
  }

  /**
   * Ville create
   */
  export type VilleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The data needed to create a Ville.
     */
    data: XOR<VilleCreateInput, VilleUncheckedCreateInput>
  }

  /**
   * Ville createMany
   */
  export type VilleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villes.
     */
    data: VilleCreateManyInput | VilleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ville createManyAndReturn
   */
  export type VilleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * The data used to create many Villes.
     */
    data: VilleCreateManyInput | VilleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ville update
   */
  export type VilleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The data needed to update a Ville.
     */
    data: XOR<VilleUpdateInput, VilleUncheckedUpdateInput>
    /**
     * Choose, which Ville to update.
     */
    where: VilleWhereUniqueInput
  }

  /**
   * Ville updateMany
   */
  export type VilleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villes.
     */
    data: XOR<VilleUpdateManyMutationInput, VilleUncheckedUpdateManyInput>
    /**
     * Filter which Villes to update
     */
    where?: VilleWhereInput
    /**
     * Limit how many Villes to update.
     */
    limit?: number
  }

  /**
   * Ville updateManyAndReturn
   */
  export type VilleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * The data used to update Villes.
     */
    data: XOR<VilleUpdateManyMutationInput, VilleUncheckedUpdateManyInput>
    /**
     * Filter which Villes to update
     */
    where?: VilleWhereInput
    /**
     * Limit how many Villes to update.
     */
    limit?: number
  }

  /**
   * Ville upsert
   */
  export type VilleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * The filter to search for the Ville to update in case it exists.
     */
    where: VilleWhereUniqueInput
    /**
     * In case the Ville found by the `where` argument doesn't exist, create a new Ville with this data.
     */
    create: XOR<VilleCreateInput, VilleUncheckedCreateInput>
    /**
     * In case the Ville was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VilleUpdateInput, VilleUncheckedUpdateInput>
  }

  /**
   * Ville delete
   */
  export type VilleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
    /**
     * Filter which Ville to delete.
     */
    where: VilleWhereUniqueInput
  }

  /**
   * Ville deleteMany
   */
  export type VilleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villes to delete
     */
    where?: VilleWhereInput
    /**
     * Limit how many Villes to delete.
     */
    limit?: number
  }

  /**
   * Ville.diagnostics
   */
  export type Ville$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    where?: CitySeodiagnosticWhereInput
    orderBy?: CitySeodiagnosticOrderByWithRelationInput | CitySeodiagnosticOrderByWithRelationInput[]
    cursor?: CitySeodiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitySeodiagnosticScalarFieldEnum | CitySeodiagnosticScalarFieldEnum[]
  }

  /**
   * Ville without action
   */
  export type VilleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ville
     */
    select?: VilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ville
     */
    omit?: VilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VilleInclude<ExtArgs> | null
  }


  /**
   * Model CitySeodiagnostic
   */

  export type AggregateCitySeodiagnostic = {
    _count: CitySeodiagnosticCountAggregateOutputType | null
    _avg: CitySeodiagnosticAvgAggregateOutputType | null
    _sum: CitySeodiagnosticSumAggregateOutputType | null
    _min: CitySeodiagnosticMinAggregateOutputType | null
    _max: CitySeodiagnosticMaxAggregateOutputType | null
  }

  export type CitySeodiagnosticAvgAggregateOutputType = {
    score: number | null
  }

  export type CitySeodiagnosticSumAggregateOutputType = {
    score: number | null
  }

  export type CitySeodiagnosticMinAggregateOutputType = {
    id: string | null
    ville_id: string | null
    type: string | null
    score: number | null
    suggestions: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CitySeodiagnosticMaxAggregateOutputType = {
    id: string | null
    ville_id: string | null
    type: string | null
    score: number | null
    suggestions: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CitySeodiagnosticCountAggregateOutputType = {
    id: number
    ville_id: number
    type: number
    score: number
    details: number
    suggestions: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CitySeodiagnosticAvgAggregateInputType = {
    score?: true
  }

  export type CitySeodiagnosticSumAggregateInputType = {
    score?: true
  }

  export type CitySeodiagnosticMinAggregateInputType = {
    id?: true
    ville_id?: true
    type?: true
    score?: true
    suggestions?: true
    created_at?: true
    updated_at?: true
  }

  export type CitySeodiagnosticMaxAggregateInputType = {
    id?: true
    ville_id?: true
    type?: true
    score?: true
    suggestions?: true
    created_at?: true
    updated_at?: true
  }

  export type CitySeodiagnosticCountAggregateInputType = {
    id?: true
    ville_id?: true
    type?: true
    score?: true
    details?: true
    suggestions?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CitySeodiagnosticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitySeodiagnostic to aggregate.
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySeodiagnostics to fetch.
     */
    orderBy?: CitySeodiagnosticOrderByWithRelationInput | CitySeodiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitySeodiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySeodiagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySeodiagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CitySeodiagnostics
    **/
    _count?: true | CitySeodiagnosticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitySeodiagnosticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySeodiagnosticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitySeodiagnosticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitySeodiagnosticMaxAggregateInputType
  }

  export type GetCitySeodiagnosticAggregateType<T extends CitySeodiagnosticAggregateArgs> = {
        [P in keyof T & keyof AggregateCitySeodiagnostic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitySeodiagnostic[P]>
      : GetScalarType<T[P], AggregateCitySeodiagnostic[P]>
  }




  export type CitySeodiagnosticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitySeodiagnosticWhereInput
    orderBy?: CitySeodiagnosticOrderByWithAggregationInput | CitySeodiagnosticOrderByWithAggregationInput[]
    by: CitySeodiagnosticScalarFieldEnum[] | CitySeodiagnosticScalarFieldEnum
    having?: CitySeodiagnosticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitySeodiagnosticCountAggregateInputType | true
    _avg?: CitySeodiagnosticAvgAggregateInputType
    _sum?: CitySeodiagnosticSumAggregateInputType
    _min?: CitySeodiagnosticMinAggregateInputType
    _max?: CitySeodiagnosticMaxAggregateInputType
  }

  export type CitySeodiagnosticGroupByOutputType = {
    id: string
    ville_id: string
    type: string
    score: number
    details: JsonValue | null
    suggestions: string | null
    created_at: Date
    updated_at: Date
    _count: CitySeodiagnosticCountAggregateOutputType | null
    _avg: CitySeodiagnosticAvgAggregateOutputType | null
    _sum: CitySeodiagnosticSumAggregateOutputType | null
    _min: CitySeodiagnosticMinAggregateOutputType | null
    _max: CitySeodiagnosticMaxAggregateOutputType | null
  }

  type GetCitySeodiagnosticGroupByPayload<T extends CitySeodiagnosticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitySeodiagnosticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitySeodiagnosticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitySeodiagnosticGroupByOutputType[P]>
            : GetScalarType<T[P], CitySeodiagnosticGroupByOutputType[P]>
        }
      >
    >


  export type CitySeodiagnosticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville_id?: boolean
    type?: boolean
    score?: boolean
    details?: boolean
    suggestions?: boolean
    created_at?: boolean
    updated_at?: boolean
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citySeodiagnostic"]>

  export type CitySeodiagnosticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville_id?: boolean
    type?: boolean
    score?: boolean
    details?: boolean
    suggestions?: boolean
    created_at?: boolean
    updated_at?: boolean
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citySeodiagnostic"]>

  export type CitySeodiagnosticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville_id?: boolean
    type?: boolean
    score?: boolean
    details?: boolean
    suggestions?: boolean
    created_at?: boolean
    updated_at?: boolean
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citySeodiagnostic"]>

  export type CitySeodiagnosticSelectScalar = {
    id?: boolean
    ville_id?: boolean
    type?: boolean
    score?: boolean
    details?: boolean
    suggestions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CitySeodiagnosticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ville_id" | "type" | "score" | "details" | "suggestions" | "created_at" | "updated_at", ExtArgs["result"]["citySeodiagnostic"]>
  export type CitySeodiagnosticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }
  export type CitySeodiagnosticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }
  export type CitySeodiagnosticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ville?: boolean | VilleDefaultArgs<ExtArgs>
  }

  export type $CitySeodiagnosticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CitySeodiagnostic"
    objects: {
      ville: Prisma.$VillePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ville_id: string
      type: string
      score: number
      details: Prisma.JsonValue | null
      suggestions: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["citySeodiagnostic"]>
    composites: {}
  }

  type CitySeodiagnosticGetPayload<S extends boolean | null | undefined | CitySeodiagnosticDefaultArgs> = $Result.GetResult<Prisma.$CitySeodiagnosticPayload, S>

  type CitySeodiagnosticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitySeodiagnosticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitySeodiagnosticCountAggregateInputType | true
    }

  export interface CitySeodiagnosticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CitySeodiagnostic'], meta: { name: 'CitySeodiagnostic' } }
    /**
     * Find zero or one CitySeodiagnostic that matches the filter.
     * @param {CitySeodiagnosticFindUniqueArgs} args - Arguments to find a CitySeodiagnostic
     * @example
     * // Get one CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitySeodiagnosticFindUniqueArgs>(args: SelectSubset<T, CitySeodiagnosticFindUniqueArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CitySeodiagnostic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitySeodiagnosticFindUniqueOrThrowArgs} args - Arguments to find a CitySeodiagnostic
     * @example
     * // Get one CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitySeodiagnosticFindUniqueOrThrowArgs>(args: SelectSubset<T, CitySeodiagnosticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CitySeodiagnostic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticFindFirstArgs} args - Arguments to find a CitySeodiagnostic
     * @example
     * // Get one CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitySeodiagnosticFindFirstArgs>(args?: SelectSubset<T, CitySeodiagnosticFindFirstArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CitySeodiagnostic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticFindFirstOrThrowArgs} args - Arguments to find a CitySeodiagnostic
     * @example
     * // Get one CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitySeodiagnosticFindFirstOrThrowArgs>(args?: SelectSubset<T, CitySeodiagnosticFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CitySeodiagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CitySeodiagnostics
     * const citySeodiagnostics = await prisma.citySeodiagnostic.findMany()
     * 
     * // Get first 10 CitySeodiagnostics
     * const citySeodiagnostics = await prisma.citySeodiagnostic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citySeodiagnosticWithIdOnly = await prisma.citySeodiagnostic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitySeodiagnosticFindManyArgs>(args?: SelectSubset<T, CitySeodiagnosticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CitySeodiagnostic.
     * @param {CitySeodiagnosticCreateArgs} args - Arguments to create a CitySeodiagnostic.
     * @example
     * // Create one CitySeodiagnostic
     * const CitySeodiagnostic = await prisma.citySeodiagnostic.create({
     *   data: {
     *     // ... data to create a CitySeodiagnostic
     *   }
     * })
     * 
     */
    create<T extends CitySeodiagnosticCreateArgs>(args: SelectSubset<T, CitySeodiagnosticCreateArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CitySeodiagnostics.
     * @param {CitySeodiagnosticCreateManyArgs} args - Arguments to create many CitySeodiagnostics.
     * @example
     * // Create many CitySeodiagnostics
     * const citySeodiagnostic = await prisma.citySeodiagnostic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitySeodiagnosticCreateManyArgs>(args?: SelectSubset<T, CitySeodiagnosticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CitySeodiagnostics and returns the data saved in the database.
     * @param {CitySeodiagnosticCreateManyAndReturnArgs} args - Arguments to create many CitySeodiagnostics.
     * @example
     * // Create many CitySeodiagnostics
     * const citySeodiagnostic = await prisma.citySeodiagnostic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CitySeodiagnostics and only return the `id`
     * const citySeodiagnosticWithIdOnly = await prisma.citySeodiagnostic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitySeodiagnosticCreateManyAndReturnArgs>(args?: SelectSubset<T, CitySeodiagnosticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CitySeodiagnostic.
     * @param {CitySeodiagnosticDeleteArgs} args - Arguments to delete one CitySeodiagnostic.
     * @example
     * // Delete one CitySeodiagnostic
     * const CitySeodiagnostic = await prisma.citySeodiagnostic.delete({
     *   where: {
     *     // ... filter to delete one CitySeodiagnostic
     *   }
     * })
     * 
     */
    delete<T extends CitySeodiagnosticDeleteArgs>(args: SelectSubset<T, CitySeodiagnosticDeleteArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CitySeodiagnostic.
     * @param {CitySeodiagnosticUpdateArgs} args - Arguments to update one CitySeodiagnostic.
     * @example
     * // Update one CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitySeodiagnosticUpdateArgs>(args: SelectSubset<T, CitySeodiagnosticUpdateArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CitySeodiagnostics.
     * @param {CitySeodiagnosticDeleteManyArgs} args - Arguments to filter CitySeodiagnostics to delete.
     * @example
     * // Delete a few CitySeodiagnostics
     * const { count } = await prisma.citySeodiagnostic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitySeodiagnosticDeleteManyArgs>(args?: SelectSubset<T, CitySeodiagnosticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CitySeodiagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CitySeodiagnostics
     * const citySeodiagnostic = await prisma.citySeodiagnostic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitySeodiagnosticUpdateManyArgs>(args: SelectSubset<T, CitySeodiagnosticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CitySeodiagnostics and returns the data updated in the database.
     * @param {CitySeodiagnosticUpdateManyAndReturnArgs} args - Arguments to update many CitySeodiagnostics.
     * @example
     * // Update many CitySeodiagnostics
     * const citySeodiagnostic = await prisma.citySeodiagnostic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CitySeodiagnostics and only return the `id`
     * const citySeodiagnosticWithIdOnly = await prisma.citySeodiagnostic.updateManyAndReturn({
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
    updateManyAndReturn<T extends CitySeodiagnosticUpdateManyAndReturnArgs>(args: SelectSubset<T, CitySeodiagnosticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CitySeodiagnostic.
     * @param {CitySeodiagnosticUpsertArgs} args - Arguments to update or create a CitySeodiagnostic.
     * @example
     * // Update or create a CitySeodiagnostic
     * const citySeodiagnostic = await prisma.citySeodiagnostic.upsert({
     *   create: {
     *     // ... data to create a CitySeodiagnostic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CitySeodiagnostic we want to update
     *   }
     * })
     */
    upsert<T extends CitySeodiagnosticUpsertArgs>(args: SelectSubset<T, CitySeodiagnosticUpsertArgs<ExtArgs>>): Prisma__CitySeodiagnosticClient<$Result.GetResult<Prisma.$CitySeodiagnosticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CitySeodiagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticCountArgs} args - Arguments to filter CitySeodiagnostics to count.
     * @example
     * // Count the number of CitySeodiagnostics
     * const count = await prisma.citySeodiagnostic.count({
     *   where: {
     *     // ... the filter for the CitySeodiagnostics we want to count
     *   }
     * })
    **/
    count<T extends CitySeodiagnosticCountArgs>(
      args?: Subset<T, CitySeodiagnosticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitySeodiagnosticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CitySeodiagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitySeodiagnosticAggregateArgs>(args: Subset<T, CitySeodiagnosticAggregateArgs>): Prisma.PrismaPromise<GetCitySeodiagnosticAggregateType<T>>

    /**
     * Group by CitySeodiagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitySeodiagnosticGroupByArgs} args - Group by arguments.
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
      T extends CitySeodiagnosticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitySeodiagnosticGroupByArgs['orderBy'] }
        : { orderBy?: CitySeodiagnosticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitySeodiagnosticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitySeodiagnosticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CitySeodiagnostic model
   */
  readonly fields: CitySeodiagnosticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CitySeodiagnostic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitySeodiagnosticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ville<T extends VilleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VilleDefaultArgs<ExtArgs>>): Prisma__VilleClient<$Result.GetResult<Prisma.$VillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CitySeodiagnostic model
   */
  interface CitySeodiagnosticFieldRefs {
    readonly id: FieldRef<"CitySeodiagnostic", 'String'>
    readonly ville_id: FieldRef<"CitySeodiagnostic", 'String'>
    readonly type: FieldRef<"CitySeodiagnostic", 'String'>
    readonly score: FieldRef<"CitySeodiagnostic", 'Int'>
    readonly details: FieldRef<"CitySeodiagnostic", 'Json'>
    readonly suggestions: FieldRef<"CitySeodiagnostic", 'String'>
    readonly created_at: FieldRef<"CitySeodiagnostic", 'DateTime'>
    readonly updated_at: FieldRef<"CitySeodiagnostic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CitySeodiagnostic findUnique
   */
  export type CitySeodiagnosticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which CitySeodiagnostic to fetch.
     */
    where: CitySeodiagnosticWhereUniqueInput
  }

  /**
   * CitySeodiagnostic findUniqueOrThrow
   */
  export type CitySeodiagnosticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which CitySeodiagnostic to fetch.
     */
    where: CitySeodiagnosticWhereUniqueInput
  }

  /**
   * CitySeodiagnostic findFirst
   */
  export type CitySeodiagnosticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which CitySeodiagnostic to fetch.
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySeodiagnostics to fetch.
     */
    orderBy?: CitySeodiagnosticOrderByWithRelationInput | CitySeodiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitySeodiagnostics.
     */
    cursor?: CitySeodiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySeodiagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySeodiagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitySeodiagnostics.
     */
    distinct?: CitySeodiagnosticScalarFieldEnum | CitySeodiagnosticScalarFieldEnum[]
  }

  /**
   * CitySeodiagnostic findFirstOrThrow
   */
  export type CitySeodiagnosticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which CitySeodiagnostic to fetch.
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySeodiagnostics to fetch.
     */
    orderBy?: CitySeodiagnosticOrderByWithRelationInput | CitySeodiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitySeodiagnostics.
     */
    cursor?: CitySeodiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySeodiagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySeodiagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitySeodiagnostics.
     */
    distinct?: CitySeodiagnosticScalarFieldEnum | CitySeodiagnosticScalarFieldEnum[]
  }

  /**
   * CitySeodiagnostic findMany
   */
  export type CitySeodiagnosticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which CitySeodiagnostics to fetch.
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitySeodiagnostics to fetch.
     */
    orderBy?: CitySeodiagnosticOrderByWithRelationInput | CitySeodiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CitySeodiagnostics.
     */
    cursor?: CitySeodiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitySeodiagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitySeodiagnostics.
     */
    skip?: number
    distinct?: CitySeodiagnosticScalarFieldEnum | CitySeodiagnosticScalarFieldEnum[]
  }

  /**
   * CitySeodiagnostic create
   */
  export type CitySeodiagnosticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to create a CitySeodiagnostic.
     */
    data: XOR<CitySeodiagnosticCreateInput, CitySeodiagnosticUncheckedCreateInput>
  }

  /**
   * CitySeodiagnostic createMany
   */
  export type CitySeodiagnosticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CitySeodiagnostics.
     */
    data: CitySeodiagnosticCreateManyInput | CitySeodiagnosticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CitySeodiagnostic createManyAndReturn
   */
  export type CitySeodiagnosticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * The data used to create many CitySeodiagnostics.
     */
    data: CitySeodiagnosticCreateManyInput | CitySeodiagnosticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CitySeodiagnostic update
   */
  export type CitySeodiagnosticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to update a CitySeodiagnostic.
     */
    data: XOR<CitySeodiagnosticUpdateInput, CitySeodiagnosticUncheckedUpdateInput>
    /**
     * Choose, which CitySeodiagnostic to update.
     */
    where: CitySeodiagnosticWhereUniqueInput
  }

  /**
   * CitySeodiagnostic updateMany
   */
  export type CitySeodiagnosticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CitySeodiagnostics.
     */
    data: XOR<CitySeodiagnosticUpdateManyMutationInput, CitySeodiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which CitySeodiagnostics to update
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * Limit how many CitySeodiagnostics to update.
     */
    limit?: number
  }

  /**
   * CitySeodiagnostic updateManyAndReturn
   */
  export type CitySeodiagnosticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * The data used to update CitySeodiagnostics.
     */
    data: XOR<CitySeodiagnosticUpdateManyMutationInput, CitySeodiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which CitySeodiagnostics to update
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * Limit how many CitySeodiagnostics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CitySeodiagnostic upsert
   */
  export type CitySeodiagnosticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * The filter to search for the CitySeodiagnostic to update in case it exists.
     */
    where: CitySeodiagnosticWhereUniqueInput
    /**
     * In case the CitySeodiagnostic found by the `where` argument doesn't exist, create a new CitySeodiagnostic with this data.
     */
    create: XOR<CitySeodiagnosticCreateInput, CitySeodiagnosticUncheckedCreateInput>
    /**
     * In case the CitySeodiagnostic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitySeodiagnosticUpdateInput, CitySeodiagnosticUncheckedUpdateInput>
  }

  /**
   * CitySeodiagnostic delete
   */
  export type CitySeodiagnosticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
    /**
     * Filter which CitySeodiagnostic to delete.
     */
    where: CitySeodiagnosticWhereUniqueInput
  }

  /**
   * CitySeodiagnostic deleteMany
   */
  export type CitySeodiagnosticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitySeodiagnostics to delete
     */
    where?: CitySeodiagnosticWhereInput
    /**
     * Limit how many CitySeodiagnostics to delete.
     */
    limit?: number
  }

  /**
   * CitySeodiagnostic without action
   */
  export type CitySeodiagnosticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitySeodiagnostic
     */
    select?: CitySeodiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitySeodiagnostic
     */
    omit?: CitySeodiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitySeodiagnosticInclude<ExtArgs> | null
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
    prix: Decimal | null
  }

  export type ReservationSumAggregateOutputType = {
    prix: Decimal | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    ville: string | null
    code_postal: string | null
    marque: string | null
    modele: string | null
    annee: string | null
    immatriculation: string | null
    type_diagnostic: string | null
    commentaires: string | null
    date_reservation: Date | null
    heure_reservation: string | null
    prix: Decimal | null
    status: string | null
    payment_intent_id: string | null
    payment_status: string | null
    payment_method: string | null
    technician_id: string | null
    diagnostic_report_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    ville: string | null
    code_postal: string | null
    marque: string | null
    modele: string | null
    annee: string | null
    immatriculation: string | null
    type_diagnostic: string | null
    commentaires: string | null
    date_reservation: Date | null
    heure_reservation: string | null
    prix: Decimal | null
    status: string | null
    payment_intent_id: string | null
    payment_status: string | null
    payment_method: string | null
    technician_id: string | null
    diagnostic_report_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    adresse: number
    ville: number
    code_postal: number
    marque: number
    modele: number
    annee: number
    immatriculation: number
    type_diagnostic: number
    commentaires: number
    date_reservation: number
    heure_reservation: number
    prix: number
    status: number
    payment_intent_id: number
    payment_status: number
    payment_method: number
    technician_id: number
    diagnostic_report_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    prix?: true
  }

  export type ReservationSumAggregateInputType = {
    prix?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    ville?: true
    code_postal?: true
    marque?: true
    modele?: true
    annee?: true
    immatriculation?: true
    type_diagnostic?: true
    commentaires?: true
    date_reservation?: true
    heure_reservation?: true
    prix?: true
    status?: true
    payment_intent_id?: true
    payment_status?: true
    payment_method?: true
    technician_id?: true
    diagnostic_report_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    ville?: true
    code_postal?: true
    marque?: true
    modele?: true
    annee?: true
    immatriculation?: true
    type_diagnostic?: true
    commentaires?: true
    date_reservation?: true
    heure_reservation?: true
    prix?: true
    status?: true
    payment_intent_id?: true
    payment_status?: true
    payment_method?: true
    technician_id?: true
    diagnostic_report_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    ville?: true
    code_postal?: true
    marque?: true
    modele?: true
    annee?: true
    immatriculation?: true
    type_diagnostic?: true
    commentaires?: true
    date_reservation?: true
    heure_reservation?: true
    prix?: true
    status?: true
    payment_intent_id?: true
    payment_status?: true
    payment_method?: true
    technician_id?: true
    diagnostic_report_id?: true
    created_at?: true
    updated_at?: true
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
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    ville: string
    code_postal: string
    marque: string
    modele: string
    annee: string | null
    immatriculation: string
    type_diagnostic: string
    commentaires: string | null
    date_reservation: Date
    heure_reservation: string
    prix: Decimal
    status: string
    payment_intent_id: string | null
    payment_status: string
    payment_method: string | null
    technician_id: string | null
    diagnostic_report_id: string | null
    created_at: Date
    updated_at: Date
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
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    ville?: boolean
    code_postal?: boolean
    marque?: boolean
    modele?: boolean
    annee?: boolean
    immatriculation?: boolean
    type_diagnostic?: boolean
    commentaires?: boolean
    date_reservation?: boolean
    heure_reservation?: boolean
    prix?: boolean
    status?: boolean
    payment_intent_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    technician_id?: boolean
    diagnostic_report_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    ville?: boolean
    code_postal?: boolean
    marque?: boolean
    modele?: boolean
    annee?: boolean
    immatriculation?: boolean
    type_diagnostic?: boolean
    commentaires?: boolean
    date_reservation?: boolean
    heure_reservation?: boolean
    prix?: boolean
    status?: boolean
    payment_intent_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    technician_id?: boolean
    diagnostic_report_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    ville?: boolean
    code_postal?: boolean
    marque?: boolean
    modele?: boolean
    annee?: boolean
    immatriculation?: boolean
    type_diagnostic?: boolean
    commentaires?: boolean
    date_reservation?: boolean
    heure_reservation?: boolean
    prix?: boolean
    status?: boolean
    payment_intent_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    technician_id?: boolean
    diagnostic_report_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    ville?: boolean
    code_postal?: boolean
    marque?: boolean
    modele?: boolean
    annee?: boolean
    immatriculation?: boolean
    type_diagnostic?: boolean
    commentaires?: boolean
    date_reservation?: boolean
    heure_reservation?: boolean
    prix?: boolean
    status?: boolean
    payment_intent_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    technician_id?: boolean
    diagnostic_report_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "adresse" | "ville" | "code_postal" | "marque" | "modele" | "annee" | "immatriculation" | "type_diagnostic" | "commentaires" | "date_reservation" | "heure_reservation" | "prix" | "status" | "payment_intent_id" | "payment_status" | "payment_method" | "technician_id" | "diagnostic_report_id" | "created_at" | "updated_at", ExtArgs["result"]["reservation"]>

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      telephone: string
      adresse: string
      ville: string
      code_postal: string
      marque: string
      modele: string
      annee: string | null
      immatriculation: string
      type_diagnostic: string
      commentaires: string | null
      date_reservation: Date
      heure_reservation: string
      prix: Prisma.Decimal
      status: string
      payment_intent_id: string | null
      payment_status: string
      payment_method: string | null
      technician_id: string | null
      diagnostic_report_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly nom: FieldRef<"Reservation", 'String'>
    readonly prenom: FieldRef<"Reservation", 'String'>
    readonly email: FieldRef<"Reservation", 'String'>
    readonly telephone: FieldRef<"Reservation", 'String'>
    readonly adresse: FieldRef<"Reservation", 'String'>
    readonly ville: FieldRef<"Reservation", 'String'>
    readonly code_postal: FieldRef<"Reservation", 'String'>
    readonly marque: FieldRef<"Reservation", 'String'>
    readonly modele: FieldRef<"Reservation", 'String'>
    readonly annee: FieldRef<"Reservation", 'String'>
    readonly immatriculation: FieldRef<"Reservation", 'String'>
    readonly type_diagnostic: FieldRef<"Reservation", 'String'>
    readonly commentaires: FieldRef<"Reservation", 'String'>
    readonly date_reservation: FieldRef<"Reservation", 'DateTime'>
    readonly heure_reservation: FieldRef<"Reservation", 'String'>
    readonly prix: FieldRef<"Reservation", 'Decimal'>
    readonly status: FieldRef<"Reservation", 'String'>
    readonly payment_intent_id: FieldRef<"Reservation", 'String'>
    readonly payment_status: FieldRef<"Reservation", 'String'>
    readonly payment_method: FieldRef<"Reservation", 'String'>
    readonly technician_id: FieldRef<"Reservation", 'String'>
    readonly diagnostic_report_id: FieldRef<"Reservation", 'String'>
    readonly created_at: FieldRef<"Reservation", 'DateTime'>
    readonly updated_at: FieldRef<"Reservation", 'DateTime'>
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
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
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
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
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
  }


  /**
   * Model Disponibilite
   */

  export type AggregateDisponibilite = {
    _count: DisponibiliteCountAggregateOutputType | null
    _min: DisponibiliteMinAggregateOutputType | null
    _max: DisponibiliteMaxAggregateOutputType | null
  }

  export type DisponibiliteMinAggregateOutputType = {
    id: string | null
    date: Date | null
    heure: string | null
    disponible: boolean | null
    technicien: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DisponibiliteMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    heure: string | null
    disponible: boolean | null
    technicien: string | null
    region: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DisponibiliteCountAggregateOutputType = {
    id: number
    date: number
    heure: number
    disponible: number
    technicien: number
    region: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DisponibiliteMinAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    disponible?: true
    technicien?: true
    region?: true
    created_at?: true
    updated_at?: true
  }

  export type DisponibiliteMaxAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    disponible?: true
    technicien?: true
    region?: true
    created_at?: true
    updated_at?: true
  }

  export type DisponibiliteCountAggregateInputType = {
    id?: true
    date?: true
    heure?: true
    disponible?: true
    technicien?: true
    region?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DisponibiliteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilite to aggregate.
     */
    where?: DisponibiliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilites to fetch.
     */
    orderBy?: DisponibiliteOrderByWithRelationInput | DisponibiliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibiliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilites
    **/
    _count?: true | DisponibiliteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibiliteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibiliteMaxAggregateInputType
  }

  export type GetDisponibiliteAggregateType<T extends DisponibiliteAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilite[P]>
      : GetScalarType<T[P], AggregateDisponibilite[P]>
  }




  export type DisponibiliteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibiliteWhereInput
    orderBy?: DisponibiliteOrderByWithAggregationInput | DisponibiliteOrderByWithAggregationInput[]
    by: DisponibiliteScalarFieldEnum[] | DisponibiliteScalarFieldEnum
    having?: DisponibiliteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibiliteCountAggregateInputType | true
    _min?: DisponibiliteMinAggregateInputType
    _max?: DisponibiliteMaxAggregateInputType
  }

  export type DisponibiliteGroupByOutputType = {
    id: string
    date: Date
    heure: string
    disponible: boolean
    technicien: string | null
    region: string | null
    created_at: Date
    updated_at: Date
    _count: DisponibiliteCountAggregateOutputType | null
    _min: DisponibiliteMinAggregateOutputType | null
    _max: DisponibiliteMaxAggregateOutputType | null
  }

  type GetDisponibiliteGroupByPayload<T extends DisponibiliteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibiliteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibiliteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibiliteGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibiliteGroupByOutputType[P]>
        }
      >
    >


  export type DisponibiliteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    disponible?: boolean
    technicien?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["disponibilite"]>

  export type DisponibiliteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    disponible?: boolean
    technicien?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["disponibilite"]>

  export type DisponibiliteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    heure?: boolean
    disponible?: boolean
    technicien?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["disponibilite"]>

  export type DisponibiliteSelectScalar = {
    id?: boolean
    date?: boolean
    heure?: boolean
    disponible?: boolean
    technicien?: boolean
    region?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DisponibiliteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "heure" | "disponible" | "technicien" | "region" | "created_at" | "updated_at", ExtArgs["result"]["disponibilite"]>

  export type $DisponibilitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      heure: string
      disponible: boolean
      technicien: string | null
      region: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["disponibilite"]>
    composites: {}
  }

  type DisponibiliteGetPayload<S extends boolean | null | undefined | DisponibiliteDefaultArgs> = $Result.GetResult<Prisma.$DisponibilitePayload, S>

  type DisponibiliteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibiliteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibiliteCountAggregateInputType | true
    }

  export interface DisponibiliteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilite'], meta: { name: 'Disponibilite' } }
    /**
     * Find zero or one Disponibilite that matches the filter.
     * @param {DisponibiliteFindUniqueArgs} args - Arguments to find a Disponibilite
     * @example
     * // Get one Disponibilite
     * const disponibilite = await prisma.disponibilite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibiliteFindUniqueArgs>(args: SelectSubset<T, DisponibiliteFindUniqueArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibiliteFindUniqueOrThrowArgs} args - Arguments to find a Disponibilite
     * @example
     * // Get one Disponibilite
     * const disponibilite = await prisma.disponibilite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibiliteFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibiliteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteFindFirstArgs} args - Arguments to find a Disponibilite
     * @example
     * // Get one Disponibilite
     * const disponibilite = await prisma.disponibilite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibiliteFindFirstArgs>(args?: SelectSubset<T, DisponibiliteFindFirstArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteFindFirstOrThrowArgs} args - Arguments to find a Disponibilite
     * @example
     * // Get one Disponibilite
     * const disponibilite = await prisma.disponibilite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibiliteFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibiliteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilites
     * const disponibilites = await prisma.disponibilite.findMany()
     * 
     * // Get first 10 Disponibilites
     * const disponibilites = await prisma.disponibilite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibiliteWithIdOnly = await prisma.disponibilite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibiliteFindManyArgs>(args?: SelectSubset<T, DisponibiliteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilite.
     * @param {DisponibiliteCreateArgs} args - Arguments to create a Disponibilite.
     * @example
     * // Create one Disponibilite
     * const Disponibilite = await prisma.disponibilite.create({
     *   data: {
     *     // ... data to create a Disponibilite
     *   }
     * })
     * 
     */
    create<T extends DisponibiliteCreateArgs>(args: SelectSubset<T, DisponibiliteCreateArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilites.
     * @param {DisponibiliteCreateManyArgs} args - Arguments to create many Disponibilites.
     * @example
     * // Create many Disponibilites
     * const disponibilite = await prisma.disponibilite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibiliteCreateManyArgs>(args?: SelectSubset<T, DisponibiliteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilites and returns the data saved in the database.
     * @param {DisponibiliteCreateManyAndReturnArgs} args - Arguments to create many Disponibilites.
     * @example
     * // Create many Disponibilites
     * const disponibilite = await prisma.disponibilite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilites and only return the `id`
     * const disponibiliteWithIdOnly = await prisma.disponibilite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibiliteCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibiliteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilite.
     * @param {DisponibiliteDeleteArgs} args - Arguments to delete one Disponibilite.
     * @example
     * // Delete one Disponibilite
     * const Disponibilite = await prisma.disponibilite.delete({
     *   where: {
     *     // ... filter to delete one Disponibilite
     *   }
     * })
     * 
     */
    delete<T extends DisponibiliteDeleteArgs>(args: SelectSubset<T, DisponibiliteDeleteArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilite.
     * @param {DisponibiliteUpdateArgs} args - Arguments to update one Disponibilite.
     * @example
     * // Update one Disponibilite
     * const disponibilite = await prisma.disponibilite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibiliteUpdateArgs>(args: SelectSubset<T, DisponibiliteUpdateArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilites.
     * @param {DisponibiliteDeleteManyArgs} args - Arguments to filter Disponibilites to delete.
     * @example
     * // Delete a few Disponibilites
     * const { count } = await prisma.disponibilite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibiliteDeleteManyArgs>(args?: SelectSubset<T, DisponibiliteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilites
     * const disponibilite = await prisma.disponibilite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibiliteUpdateManyArgs>(args: SelectSubset<T, DisponibiliteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilites and returns the data updated in the database.
     * @param {DisponibiliteUpdateManyAndReturnArgs} args - Arguments to update many Disponibilites.
     * @example
     * // Update many Disponibilites
     * const disponibilite = await prisma.disponibilite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilites and only return the `id`
     * const disponibiliteWithIdOnly = await prisma.disponibilite.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisponibiliteUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibiliteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilite.
     * @param {DisponibiliteUpsertArgs} args - Arguments to update or create a Disponibilite.
     * @example
     * // Update or create a Disponibilite
     * const disponibilite = await prisma.disponibilite.upsert({
     *   create: {
     *     // ... data to create a Disponibilite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilite we want to update
     *   }
     * })
     */
    upsert<T extends DisponibiliteUpsertArgs>(args: SelectSubset<T, DisponibiliteUpsertArgs<ExtArgs>>): Prisma__DisponibiliteClient<$Result.GetResult<Prisma.$DisponibilitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteCountArgs} args - Arguments to filter Disponibilites to count.
     * @example
     * // Count the number of Disponibilites
     * const count = await prisma.disponibilite.count({
     *   where: {
     *     // ... the filter for the Disponibilites we want to count
     *   }
     * })
    **/
    count<T extends DisponibiliteCountArgs>(
      args?: Subset<T, DisponibiliteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibiliteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisponibiliteAggregateArgs>(args: Subset<T, DisponibiliteAggregateArgs>): Prisma.PrismaPromise<GetDisponibiliteAggregateType<T>>

    /**
     * Group by Disponibilite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibiliteGroupByArgs} args - Group by arguments.
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
      T extends DisponibiliteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibiliteGroupByArgs['orderBy'] }
        : { orderBy?: DisponibiliteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisponibiliteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibiliteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilite model
   */
  readonly fields: DisponibiliteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibiliteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Disponibilite model
   */
  interface DisponibiliteFieldRefs {
    readonly id: FieldRef<"Disponibilite", 'String'>
    readonly date: FieldRef<"Disponibilite", 'DateTime'>
    readonly heure: FieldRef<"Disponibilite", 'String'>
    readonly disponible: FieldRef<"Disponibilite", 'Boolean'>
    readonly technicien: FieldRef<"Disponibilite", 'String'>
    readonly region: FieldRef<"Disponibilite", 'String'>
    readonly created_at: FieldRef<"Disponibilite", 'DateTime'>
    readonly updated_at: FieldRef<"Disponibilite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilite findUnique
   */
  export type DisponibiliteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilite to fetch.
     */
    where: DisponibiliteWhereUniqueInput
  }

  /**
   * Disponibilite findUniqueOrThrow
   */
  export type DisponibiliteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilite to fetch.
     */
    where: DisponibiliteWhereUniqueInput
  }

  /**
   * Disponibilite findFirst
   */
  export type DisponibiliteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilite to fetch.
     */
    where?: DisponibiliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilites to fetch.
     */
    orderBy?: DisponibiliteOrderByWithRelationInput | DisponibiliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilites.
     */
    cursor?: DisponibiliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilites.
     */
    distinct?: DisponibiliteScalarFieldEnum | DisponibiliteScalarFieldEnum[]
  }

  /**
   * Disponibilite findFirstOrThrow
   */
  export type DisponibiliteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilite to fetch.
     */
    where?: DisponibiliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilites to fetch.
     */
    orderBy?: DisponibiliteOrderByWithRelationInput | DisponibiliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilites.
     */
    cursor?: DisponibiliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilites.
     */
    distinct?: DisponibiliteScalarFieldEnum | DisponibiliteScalarFieldEnum[]
  }

  /**
   * Disponibilite findMany
   */
  export type DisponibiliteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilites to fetch.
     */
    where?: DisponibiliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilites to fetch.
     */
    orderBy?: DisponibiliteOrderByWithRelationInput | DisponibiliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilites.
     */
    cursor?: DisponibiliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilites.
     */
    skip?: number
    distinct?: DisponibiliteScalarFieldEnum | DisponibiliteScalarFieldEnum[]
  }

  /**
   * Disponibilite create
   */
  export type DisponibiliteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * The data needed to create a Disponibilite.
     */
    data: XOR<DisponibiliteCreateInput, DisponibiliteUncheckedCreateInput>
  }

  /**
   * Disponibilite createMany
   */
  export type DisponibiliteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilites.
     */
    data: DisponibiliteCreateManyInput | DisponibiliteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilite createManyAndReturn
   */
  export type DisponibiliteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilites.
     */
    data: DisponibiliteCreateManyInput | DisponibiliteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilite update
   */
  export type DisponibiliteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * The data needed to update a Disponibilite.
     */
    data: XOR<DisponibiliteUpdateInput, DisponibiliteUncheckedUpdateInput>
    /**
     * Choose, which Disponibilite to update.
     */
    where: DisponibiliteWhereUniqueInput
  }

  /**
   * Disponibilite updateMany
   */
  export type DisponibiliteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilites.
     */
    data: XOR<DisponibiliteUpdateManyMutationInput, DisponibiliteUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilites to update
     */
    where?: DisponibiliteWhereInput
    /**
     * Limit how many Disponibilites to update.
     */
    limit?: number
  }

  /**
   * Disponibilite updateManyAndReturn
   */
  export type DisponibiliteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilites.
     */
    data: XOR<DisponibiliteUpdateManyMutationInput, DisponibiliteUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilites to update
     */
    where?: DisponibiliteWhereInput
    /**
     * Limit how many Disponibilites to update.
     */
    limit?: number
  }

  /**
   * Disponibilite upsert
   */
  export type DisponibiliteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * The filter to search for the Disponibilite to update in case it exists.
     */
    where: DisponibiliteWhereUniqueInput
    /**
     * In case the Disponibilite found by the `where` argument doesn't exist, create a new Disponibilite with this data.
     */
    create: XOR<DisponibiliteCreateInput, DisponibiliteUncheckedCreateInput>
    /**
     * In case the Disponibilite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibiliteUpdateInput, DisponibiliteUncheckedUpdateInput>
  }

  /**
   * Disponibilite delete
   */
  export type DisponibiliteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
    /**
     * Filter which Disponibilite to delete.
     */
    where: DisponibiliteWhereUniqueInput
  }

  /**
   * Disponibilite deleteMany
   */
  export type DisponibiliteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilites to delete
     */
    where?: DisponibiliteWhereInput
    /**
     * Limit how many Disponibilites to delete.
     */
    limit?: number
  }

  /**
   * Disponibilite without action
   */
  export type DisponibiliteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilite
     */
    select?: DisponibiliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilite
     */
    omit?: DisponibiliteOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    picture: string | null
    googleId: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    picture: string | null
    googleId: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    picture: number
    googleId: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    googleId?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    googleId?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    googleId?: true
    role?: true
    created_at?: true
    updated_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    picture: string | null
    googleId: string | null
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    picture?: boolean
    googleId?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    googleId?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    googleId?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    googleId?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "picture" | "googleId" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      picture: string | null
      googleId: string | null
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    created_at: Date
    updated_at: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "created_at" | "updated_at", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
    readonly updated_at: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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


  export const DemandesSavScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    sujet: 'sujet',
    description: 'description',
    fichier_url: 'fichier_url',
    statut: 'statut',
    assigne_a: 'assigne_a',
    notes_internes: 'notes_internes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DemandesSavScalarFieldEnum = (typeof DemandesSavScalarFieldEnum)[keyof typeof DemandesSavScalarFieldEnum]


  export const VehicleInfoScalarFieldEnum: {
    id: 'id',
    plate: 'plate',
    marque: 'marque',
    modele: 'modele',
    carrosserie: 'carrosserie',
    couleur: 'couleur',
    energie: 'energie',
    annee: 'annee',
    puissance_fiscale: 'puissance_fiscale',
    puissance_din: 'puissance_din',
    nombre_places: 'nombre_places',
    date_mise_en_circulation: 'date_mise_en_circulation',
    donnees_brutes: 'donnees_brutes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VehicleInfoScalarFieldEnum = (typeof VehicleInfoScalarFieldEnum)[keyof typeof VehicleInfoScalarFieldEnum]


  export const VilleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    nom: 'nom',
    region: 'region',
    departement: 'departement',
    code_postal: 'code_postal',
    population: 'population',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    introduction: 'introduction',
    avantages_locaux: 'avantages_locaux',
    prix_specifiques: 'prix_specifiques',
    points_interet: 'points_interet',
    latitude: 'latitude',
    longitude: 'longitude',
    visites: 'visites',
    conversions: 'conversions',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VilleScalarFieldEnum = (typeof VilleScalarFieldEnum)[keyof typeof VilleScalarFieldEnum]


  export const CitySeodiagnosticScalarFieldEnum: {
    id: 'id',
    ville_id: 'ville_id',
    type: 'type',
    score: 'score',
    details: 'details',
    suggestions: 'suggestions',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CitySeodiagnosticScalarFieldEnum = (typeof CitySeodiagnosticScalarFieldEnum)[keyof typeof CitySeodiagnosticScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    adresse: 'adresse',
    ville: 'ville',
    code_postal: 'code_postal',
    marque: 'marque',
    modele: 'modele',
    annee: 'annee',
    immatriculation: 'immatriculation',
    type_diagnostic: 'type_diagnostic',
    commentaires: 'commentaires',
    date_reservation: 'date_reservation',
    heure_reservation: 'heure_reservation',
    prix: 'prix',
    status: 'status',
    payment_intent_id: 'payment_intent_id',
    payment_status: 'payment_status',
    payment_method: 'payment_method',
    technician_id: 'technician_id',
    diagnostic_report_id: 'diagnostic_report_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const DisponibiliteScalarFieldEnum: {
    id: 'id',
    date: 'date',
    heure: 'heure',
    disponible: 'disponible',
    technicien: 'technicien',
    region: 'region',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DisponibiliteScalarFieldEnum = (typeof DisponibiliteScalarFieldEnum)[keyof typeof DisponibiliteScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    picture: 'picture',
    googleId: 'googleId',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DemandesSavWhereInput = {
    AND?: DemandesSavWhereInput | DemandesSavWhereInput[]
    OR?: DemandesSavWhereInput[]
    NOT?: DemandesSavWhereInput | DemandesSavWhereInput[]
    id?: UuidFilter<"DemandesSav"> | string
    nom?: StringFilter<"DemandesSav"> | string
    prenom?: StringFilter<"DemandesSav"> | string
    email?: StringFilter<"DemandesSav"> | string
    telephone?: StringFilter<"DemandesSav"> | string
    sujet?: StringFilter<"DemandesSav"> | string
    description?: StringFilter<"DemandesSav"> | string
    fichier_url?: StringNullableFilter<"DemandesSav"> | string | null
    statut?: StringFilter<"DemandesSav"> | string
    assigne_a?: UuidNullableFilter<"DemandesSav"> | string | null
    notes_internes?: StringNullableFilter<"DemandesSav"> | string | null
    created_at?: DateTimeFilter<"DemandesSav"> | Date | string
    updated_at?: DateTimeFilter<"DemandesSav"> | Date | string
  }

  export type DemandesSavOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    sujet?: SortOrder
    description?: SortOrder
    fichier_url?: SortOrderInput | SortOrder
    statut?: SortOrder
    assigne_a?: SortOrderInput | SortOrder
    notes_internes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DemandesSavWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemandesSavWhereInput | DemandesSavWhereInput[]
    OR?: DemandesSavWhereInput[]
    NOT?: DemandesSavWhereInput | DemandesSavWhereInput[]
    nom?: StringFilter<"DemandesSav"> | string
    prenom?: StringFilter<"DemandesSav"> | string
    email?: StringFilter<"DemandesSav"> | string
    telephone?: StringFilter<"DemandesSav"> | string
    sujet?: StringFilter<"DemandesSav"> | string
    description?: StringFilter<"DemandesSav"> | string
    fichier_url?: StringNullableFilter<"DemandesSav"> | string | null
    statut?: StringFilter<"DemandesSav"> | string
    assigne_a?: UuidNullableFilter<"DemandesSav"> | string | null
    notes_internes?: StringNullableFilter<"DemandesSav"> | string | null
    created_at?: DateTimeFilter<"DemandesSav"> | Date | string
    updated_at?: DateTimeFilter<"DemandesSav"> | Date | string
  }, "id">

  export type DemandesSavOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    sujet?: SortOrder
    description?: SortOrder
    fichier_url?: SortOrderInput | SortOrder
    statut?: SortOrder
    assigne_a?: SortOrderInput | SortOrder
    notes_internes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DemandesSavCountOrderByAggregateInput
    _max?: DemandesSavMaxOrderByAggregateInput
    _min?: DemandesSavMinOrderByAggregateInput
  }

  export type DemandesSavScalarWhereWithAggregatesInput = {
    AND?: DemandesSavScalarWhereWithAggregatesInput | DemandesSavScalarWhereWithAggregatesInput[]
    OR?: DemandesSavScalarWhereWithAggregatesInput[]
    NOT?: DemandesSavScalarWhereWithAggregatesInput | DemandesSavScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DemandesSav"> | string
    nom?: StringWithAggregatesFilter<"DemandesSav"> | string
    prenom?: StringWithAggregatesFilter<"DemandesSav"> | string
    email?: StringWithAggregatesFilter<"DemandesSav"> | string
    telephone?: StringWithAggregatesFilter<"DemandesSav"> | string
    sujet?: StringWithAggregatesFilter<"DemandesSav"> | string
    description?: StringWithAggregatesFilter<"DemandesSav"> | string
    fichier_url?: StringNullableWithAggregatesFilter<"DemandesSav"> | string | null
    statut?: StringWithAggregatesFilter<"DemandesSav"> | string
    assigne_a?: UuidNullableWithAggregatesFilter<"DemandesSav"> | string | null
    notes_internes?: StringNullableWithAggregatesFilter<"DemandesSav"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"DemandesSav"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DemandesSav"> | Date | string
  }

  export type VehicleInfoWhereInput = {
    AND?: VehicleInfoWhereInput | VehicleInfoWhereInput[]
    OR?: VehicleInfoWhereInput[]
    NOT?: VehicleInfoWhereInput | VehicleInfoWhereInput[]
    id?: UuidFilter<"VehicleInfo"> | string
    plate?: StringFilter<"VehicleInfo"> | string
    marque?: StringNullableFilter<"VehicleInfo"> | string | null
    modele?: StringNullableFilter<"VehicleInfo"> | string | null
    carrosserie?: StringNullableFilter<"VehicleInfo"> | string | null
    couleur?: StringNullableFilter<"VehicleInfo"> | string | null
    energie?: StringNullableFilter<"VehicleInfo"> | string | null
    annee?: StringNullableFilter<"VehicleInfo"> | string | null
    puissance_fiscale?: StringNullableFilter<"VehicleInfo"> | string | null
    puissance_din?: StringNullableFilter<"VehicleInfo"> | string | null
    nombre_places?: StringNullableFilter<"VehicleInfo"> | string | null
    date_mise_en_circulation?: StringNullableFilter<"VehicleInfo"> | string | null
    donnees_brutes?: JsonNullableFilter<"VehicleInfo">
    created_at?: DateTimeFilter<"VehicleInfo"> | Date | string
    updated_at?: DateTimeFilter<"VehicleInfo"> | Date | string
  }

  export type VehicleInfoOrderByWithRelationInput = {
    id?: SortOrder
    plate?: SortOrder
    marque?: SortOrderInput | SortOrder
    modele?: SortOrderInput | SortOrder
    carrosserie?: SortOrderInput | SortOrder
    couleur?: SortOrderInput | SortOrder
    energie?: SortOrderInput | SortOrder
    annee?: SortOrderInput | SortOrder
    puissance_fiscale?: SortOrderInput | SortOrder
    puissance_din?: SortOrderInput | SortOrder
    nombre_places?: SortOrderInput | SortOrder
    date_mise_en_circulation?: SortOrderInput | SortOrder
    donnees_brutes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VehicleInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    AND?: VehicleInfoWhereInput | VehicleInfoWhereInput[]
    OR?: VehicleInfoWhereInput[]
    NOT?: VehicleInfoWhereInput | VehicleInfoWhereInput[]
    marque?: StringNullableFilter<"VehicleInfo"> | string | null
    modele?: StringNullableFilter<"VehicleInfo"> | string | null
    carrosserie?: StringNullableFilter<"VehicleInfo"> | string | null
    couleur?: StringNullableFilter<"VehicleInfo"> | string | null
    energie?: StringNullableFilter<"VehicleInfo"> | string | null
    annee?: StringNullableFilter<"VehicleInfo"> | string | null
    puissance_fiscale?: StringNullableFilter<"VehicleInfo"> | string | null
    puissance_din?: StringNullableFilter<"VehicleInfo"> | string | null
    nombre_places?: StringNullableFilter<"VehicleInfo"> | string | null
    date_mise_en_circulation?: StringNullableFilter<"VehicleInfo"> | string | null
    donnees_brutes?: JsonNullableFilter<"VehicleInfo">
    created_at?: DateTimeFilter<"VehicleInfo"> | Date | string
    updated_at?: DateTimeFilter<"VehicleInfo"> | Date | string
  }, "id" | "plate">

  export type VehicleInfoOrderByWithAggregationInput = {
    id?: SortOrder
    plate?: SortOrder
    marque?: SortOrderInput | SortOrder
    modele?: SortOrderInput | SortOrder
    carrosserie?: SortOrderInput | SortOrder
    couleur?: SortOrderInput | SortOrder
    energie?: SortOrderInput | SortOrder
    annee?: SortOrderInput | SortOrder
    puissance_fiscale?: SortOrderInput | SortOrder
    puissance_din?: SortOrderInput | SortOrder
    nombre_places?: SortOrderInput | SortOrder
    date_mise_en_circulation?: SortOrderInput | SortOrder
    donnees_brutes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: VehicleInfoCountOrderByAggregateInput
    _max?: VehicleInfoMaxOrderByAggregateInput
    _min?: VehicleInfoMinOrderByAggregateInput
  }

  export type VehicleInfoScalarWhereWithAggregatesInput = {
    AND?: VehicleInfoScalarWhereWithAggregatesInput | VehicleInfoScalarWhereWithAggregatesInput[]
    OR?: VehicleInfoScalarWhereWithAggregatesInput[]
    NOT?: VehicleInfoScalarWhereWithAggregatesInput | VehicleInfoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VehicleInfo"> | string
    plate?: StringWithAggregatesFilter<"VehicleInfo"> | string
    marque?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    modele?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    carrosserie?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    couleur?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    energie?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    annee?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    puissance_fiscale?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    puissance_din?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    nombre_places?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    date_mise_en_circulation?: StringNullableWithAggregatesFilter<"VehicleInfo"> | string | null
    donnees_brutes?: JsonNullableWithAggregatesFilter<"VehicleInfo">
    created_at?: DateTimeWithAggregatesFilter<"VehicleInfo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"VehicleInfo"> | Date | string
  }

  export type VilleWhereInput = {
    AND?: VilleWhereInput | VilleWhereInput[]
    OR?: VilleWhereInput[]
    NOT?: VilleWhereInput | VilleWhereInput[]
    id?: UuidFilter<"Ville"> | string
    slug?: StringFilter<"Ville"> | string
    nom?: StringFilter<"Ville"> | string
    region?: StringFilter<"Ville"> | string
    departement?: StringFilter<"Ville"> | string
    code_postal?: StringFilter<"Ville"> | string
    population?: IntNullableFilter<"Ville"> | number | null
    meta_title?: StringFilter<"Ville"> | string
    meta_description?: StringFilter<"Ville"> | string
    introduction?: StringFilter<"Ville"> | string
    avantages_locaux?: StringNullableListFilter<"Ville">
    prix_specifiques?: JsonFilter<"Ville">
    points_interet?: JsonFilter<"Ville">
    latitude?: DecimalNullableFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    visites?: IntFilter<"Ville"> | number
    conversions?: IntFilter<"Ville"> | number
    created_at?: DateTimeFilter<"Ville"> | Date | string
    updated_at?: DateTimeFilter<"Ville"> | Date | string
    diagnostics?: CitySeodiagnosticListRelationFilter
  }

  export type VilleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    nom?: SortOrder
    region?: SortOrder
    departement?: SortOrder
    code_postal?: SortOrder
    population?: SortOrderInput | SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    introduction?: SortOrder
    avantages_locaux?: SortOrder
    prix_specifiques?: SortOrder
    points_interet?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    visites?: SortOrder
    conversions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    diagnostics?: CitySeodiagnosticOrderByRelationAggregateInput
  }

  export type VilleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VilleWhereInput | VilleWhereInput[]
    OR?: VilleWhereInput[]
    NOT?: VilleWhereInput | VilleWhereInput[]
    nom?: StringFilter<"Ville"> | string
    region?: StringFilter<"Ville"> | string
    departement?: StringFilter<"Ville"> | string
    code_postal?: StringFilter<"Ville"> | string
    population?: IntNullableFilter<"Ville"> | number | null
    meta_title?: StringFilter<"Ville"> | string
    meta_description?: StringFilter<"Ville"> | string
    introduction?: StringFilter<"Ville"> | string
    avantages_locaux?: StringNullableListFilter<"Ville">
    prix_specifiques?: JsonFilter<"Ville">
    points_interet?: JsonFilter<"Ville">
    latitude?: DecimalNullableFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    visites?: IntFilter<"Ville"> | number
    conversions?: IntFilter<"Ville"> | number
    created_at?: DateTimeFilter<"Ville"> | Date | string
    updated_at?: DateTimeFilter<"Ville"> | Date | string
    diagnostics?: CitySeodiagnosticListRelationFilter
  }, "id" | "slug">

  export type VilleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    nom?: SortOrder
    region?: SortOrder
    departement?: SortOrder
    code_postal?: SortOrder
    population?: SortOrderInput | SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    introduction?: SortOrder
    avantages_locaux?: SortOrder
    prix_specifiques?: SortOrder
    points_interet?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    visites?: SortOrder
    conversions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: VilleCountOrderByAggregateInput
    _avg?: VilleAvgOrderByAggregateInput
    _max?: VilleMaxOrderByAggregateInput
    _min?: VilleMinOrderByAggregateInput
    _sum?: VilleSumOrderByAggregateInput
  }

  export type VilleScalarWhereWithAggregatesInput = {
    AND?: VilleScalarWhereWithAggregatesInput | VilleScalarWhereWithAggregatesInput[]
    OR?: VilleScalarWhereWithAggregatesInput[]
    NOT?: VilleScalarWhereWithAggregatesInput | VilleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ville"> | string
    slug?: StringWithAggregatesFilter<"Ville"> | string
    nom?: StringWithAggregatesFilter<"Ville"> | string
    region?: StringWithAggregatesFilter<"Ville"> | string
    departement?: StringWithAggregatesFilter<"Ville"> | string
    code_postal?: StringWithAggregatesFilter<"Ville"> | string
    population?: IntNullableWithAggregatesFilter<"Ville"> | number | null
    meta_title?: StringWithAggregatesFilter<"Ville"> | string
    meta_description?: StringWithAggregatesFilter<"Ville"> | string
    introduction?: StringWithAggregatesFilter<"Ville"> | string
    avantages_locaux?: StringNullableListFilter<"Ville">
    prix_specifiques?: JsonWithAggregatesFilter<"Ville">
    points_interet?: JsonWithAggregatesFilter<"Ville">
    latitude?: DecimalNullableWithAggregatesFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Ville"> | Decimal | DecimalJsLike | number | string | null
    visites?: IntWithAggregatesFilter<"Ville"> | number
    conversions?: IntWithAggregatesFilter<"Ville"> | number
    created_at?: DateTimeWithAggregatesFilter<"Ville"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ville"> | Date | string
  }

  export type CitySeodiagnosticWhereInput = {
    AND?: CitySeodiagnosticWhereInput | CitySeodiagnosticWhereInput[]
    OR?: CitySeodiagnosticWhereInput[]
    NOT?: CitySeodiagnosticWhereInput | CitySeodiagnosticWhereInput[]
    id?: UuidFilter<"CitySeodiagnostic"> | string
    ville_id?: UuidFilter<"CitySeodiagnostic"> | string
    type?: StringFilter<"CitySeodiagnostic"> | string
    score?: IntFilter<"CitySeodiagnostic"> | number
    details?: JsonNullableFilter<"CitySeodiagnostic">
    suggestions?: StringNullableFilter<"CitySeodiagnostic"> | string | null
    created_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
    updated_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
    ville?: XOR<VilleScalarRelationFilter, VilleWhereInput>
  }

  export type CitySeodiagnosticOrderByWithRelationInput = {
    id?: SortOrder
    ville_id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    details?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ville?: VilleOrderByWithRelationInput
  }

  export type CitySeodiagnosticWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CitySeodiagnosticWhereInput | CitySeodiagnosticWhereInput[]
    OR?: CitySeodiagnosticWhereInput[]
    NOT?: CitySeodiagnosticWhereInput | CitySeodiagnosticWhereInput[]
    ville_id?: UuidFilter<"CitySeodiagnostic"> | string
    type?: StringFilter<"CitySeodiagnostic"> | string
    score?: IntFilter<"CitySeodiagnostic"> | number
    details?: JsonNullableFilter<"CitySeodiagnostic">
    suggestions?: StringNullableFilter<"CitySeodiagnostic"> | string | null
    created_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
    updated_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
    ville?: XOR<VilleScalarRelationFilter, VilleWhereInput>
  }, "id">

  export type CitySeodiagnosticOrderByWithAggregationInput = {
    id?: SortOrder
    ville_id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    details?: SortOrderInput | SortOrder
    suggestions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CitySeodiagnosticCountOrderByAggregateInput
    _avg?: CitySeodiagnosticAvgOrderByAggregateInput
    _max?: CitySeodiagnosticMaxOrderByAggregateInput
    _min?: CitySeodiagnosticMinOrderByAggregateInput
    _sum?: CitySeodiagnosticSumOrderByAggregateInput
  }

  export type CitySeodiagnosticScalarWhereWithAggregatesInput = {
    AND?: CitySeodiagnosticScalarWhereWithAggregatesInput | CitySeodiagnosticScalarWhereWithAggregatesInput[]
    OR?: CitySeodiagnosticScalarWhereWithAggregatesInput[]
    NOT?: CitySeodiagnosticScalarWhereWithAggregatesInput | CitySeodiagnosticScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CitySeodiagnostic"> | string
    ville_id?: UuidWithAggregatesFilter<"CitySeodiagnostic"> | string
    type?: StringWithAggregatesFilter<"CitySeodiagnostic"> | string
    score?: IntWithAggregatesFilter<"CitySeodiagnostic"> | number
    details?: JsonNullableWithAggregatesFilter<"CitySeodiagnostic">
    suggestions?: StringNullableWithAggregatesFilter<"CitySeodiagnostic"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"CitySeodiagnostic"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CitySeodiagnostic"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: UuidFilter<"Reservation"> | string
    nom?: StringFilter<"Reservation"> | string
    prenom?: StringFilter<"Reservation"> | string
    email?: StringFilter<"Reservation"> | string
    telephone?: StringFilter<"Reservation"> | string
    adresse?: StringFilter<"Reservation"> | string
    ville?: StringFilter<"Reservation"> | string
    code_postal?: StringFilter<"Reservation"> | string
    marque?: StringFilter<"Reservation"> | string
    modele?: StringFilter<"Reservation"> | string
    annee?: StringNullableFilter<"Reservation"> | string | null
    immatriculation?: StringFilter<"Reservation"> | string
    type_diagnostic?: StringFilter<"Reservation"> | string
    commentaires?: StringNullableFilter<"Reservation"> | string | null
    date_reservation?: DateTimeFilter<"Reservation"> | Date | string
    heure_reservation?: StringFilter<"Reservation"> | string
    prix?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Reservation"> | string
    payment_intent_id?: StringNullableFilter<"Reservation"> | string | null
    payment_status?: StringFilter<"Reservation"> | string
    payment_method?: StringNullableFilter<"Reservation"> | string | null
    technician_id?: UuidNullableFilter<"Reservation"> | string | null
    diagnostic_report_id?: UuidNullableFilter<"Reservation"> | string | null
    created_at?: DateTimeFilter<"Reservation"> | Date | string
    updated_at?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    code_postal?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    annee?: SortOrderInput | SortOrder
    immatriculation?: SortOrder
    type_diagnostic?: SortOrder
    commentaires?: SortOrderInput | SortOrder
    date_reservation?: SortOrder
    heure_reservation?: SortOrder
    prix?: SortOrder
    status?: SortOrder
    payment_intent_id?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    technician_id?: SortOrderInput | SortOrder
    diagnostic_report_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    nom?: StringFilter<"Reservation"> | string
    prenom?: StringFilter<"Reservation"> | string
    email?: StringFilter<"Reservation"> | string
    telephone?: StringFilter<"Reservation"> | string
    adresse?: StringFilter<"Reservation"> | string
    ville?: StringFilter<"Reservation"> | string
    code_postal?: StringFilter<"Reservation"> | string
    marque?: StringFilter<"Reservation"> | string
    modele?: StringFilter<"Reservation"> | string
    annee?: StringNullableFilter<"Reservation"> | string | null
    immatriculation?: StringFilter<"Reservation"> | string
    type_diagnostic?: StringFilter<"Reservation"> | string
    commentaires?: StringNullableFilter<"Reservation"> | string | null
    date_reservation?: DateTimeFilter<"Reservation"> | Date | string
    heure_reservation?: StringFilter<"Reservation"> | string
    prix?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Reservation"> | string
    payment_intent_id?: StringNullableFilter<"Reservation"> | string | null
    payment_status?: StringFilter<"Reservation"> | string
    payment_method?: StringNullableFilter<"Reservation"> | string | null
    technician_id?: UuidNullableFilter<"Reservation"> | string | null
    diagnostic_report_id?: UuidNullableFilter<"Reservation"> | string | null
    created_at?: DateTimeFilter<"Reservation"> | Date | string
    updated_at?: DateTimeFilter<"Reservation"> | Date | string
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    code_postal?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    annee?: SortOrderInput | SortOrder
    immatriculation?: SortOrder
    type_diagnostic?: SortOrder
    commentaires?: SortOrderInput | SortOrder
    date_reservation?: SortOrder
    heure_reservation?: SortOrder
    prix?: SortOrder
    status?: SortOrder
    payment_intent_id?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    technician_id?: SortOrderInput | SortOrder
    diagnostic_report_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    id?: UuidWithAggregatesFilter<"Reservation"> | string
    nom?: StringWithAggregatesFilter<"Reservation"> | string
    prenom?: StringWithAggregatesFilter<"Reservation"> | string
    email?: StringWithAggregatesFilter<"Reservation"> | string
    telephone?: StringWithAggregatesFilter<"Reservation"> | string
    adresse?: StringWithAggregatesFilter<"Reservation"> | string
    ville?: StringWithAggregatesFilter<"Reservation"> | string
    code_postal?: StringWithAggregatesFilter<"Reservation"> | string
    marque?: StringWithAggregatesFilter<"Reservation"> | string
    modele?: StringWithAggregatesFilter<"Reservation"> | string
    annee?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    immatriculation?: StringWithAggregatesFilter<"Reservation"> | string
    type_diagnostic?: StringWithAggregatesFilter<"Reservation"> | string
    commentaires?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    date_reservation?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    heure_reservation?: StringWithAggregatesFilter<"Reservation"> | string
    prix?: DecimalWithAggregatesFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Reservation"> | string
    payment_intent_id?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    payment_status?: StringWithAggregatesFilter<"Reservation"> | string
    payment_method?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    technician_id?: UuidNullableWithAggregatesFilter<"Reservation"> | string | null
    diagnostic_report_id?: UuidNullableWithAggregatesFilter<"Reservation"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type DisponibiliteWhereInput = {
    AND?: DisponibiliteWhereInput | DisponibiliteWhereInput[]
    OR?: DisponibiliteWhereInput[]
    NOT?: DisponibiliteWhereInput | DisponibiliteWhereInput[]
    id?: UuidFilter<"Disponibilite"> | string
    date?: DateTimeFilter<"Disponibilite"> | Date | string
    heure?: StringFilter<"Disponibilite"> | string
    disponible?: BoolFilter<"Disponibilite"> | boolean
    technicien?: UuidNullableFilter<"Disponibilite"> | string | null
    region?: StringNullableFilter<"Disponibilite"> | string | null
    created_at?: DateTimeFilter<"Disponibilite"> | Date | string
    updated_at?: DateTimeFilter<"Disponibilite"> | Date | string
  }

  export type DisponibiliteOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    disponible?: SortOrder
    technicien?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DisponibiliteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date_heure_technicien?: DisponibiliteDateHeureTechnicienCompoundUniqueInput
    AND?: DisponibiliteWhereInput | DisponibiliteWhereInput[]
    OR?: DisponibiliteWhereInput[]
    NOT?: DisponibiliteWhereInput | DisponibiliteWhereInput[]
    date?: DateTimeFilter<"Disponibilite"> | Date | string
    heure?: StringFilter<"Disponibilite"> | string
    disponible?: BoolFilter<"Disponibilite"> | boolean
    technicien?: UuidNullableFilter<"Disponibilite"> | string | null
    region?: StringNullableFilter<"Disponibilite"> | string | null
    created_at?: DateTimeFilter<"Disponibilite"> | Date | string
    updated_at?: DateTimeFilter<"Disponibilite"> | Date | string
  }, "id" | "date_heure_technicien">

  export type DisponibiliteOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    disponible?: SortOrder
    technicien?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DisponibiliteCountOrderByAggregateInput
    _max?: DisponibiliteMaxOrderByAggregateInput
    _min?: DisponibiliteMinOrderByAggregateInput
  }

  export type DisponibiliteScalarWhereWithAggregatesInput = {
    AND?: DisponibiliteScalarWhereWithAggregatesInput | DisponibiliteScalarWhereWithAggregatesInput[]
    OR?: DisponibiliteScalarWhereWithAggregatesInput[]
    NOT?: DisponibiliteScalarWhereWithAggregatesInput | DisponibiliteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Disponibilite"> | string
    date?: DateTimeWithAggregatesFilter<"Disponibilite"> | Date | string
    heure?: StringWithAggregatesFilter<"Disponibilite"> | string
    disponible?: BoolWithAggregatesFilter<"Disponibilite"> | boolean
    technicien?: UuidNullableWithAggregatesFilter<"Disponibilite"> | string | null
    region?: StringNullableWithAggregatesFilter<"Disponibilite"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Disponibilite"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Disponibilite"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: UuidFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type DemandesSavCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    sujet: string
    description: string
    fichier_url?: string | null
    statut?: string
    assigne_a?: string | null
    notes_internes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DemandesSavUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    sujet: string
    description: string
    fichier_url?: string | null
    statut?: string
    assigne_a?: string | null
    notes_internes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DemandesSavUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fichier_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    assigne_a?: NullableStringFieldUpdateOperationsInput | string | null
    notes_internes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandesSavUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fichier_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    assigne_a?: NullableStringFieldUpdateOperationsInput | string | null
    notes_internes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandesSavCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    sujet: string
    description: string
    fichier_url?: string | null
    statut?: string
    assigne_a?: string | null
    notes_internes?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DemandesSavUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fichier_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    assigne_a?: NullableStringFieldUpdateOperationsInput | string | null
    notes_internes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandesSavUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fichier_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: StringFieldUpdateOperationsInput | string
    assigne_a?: NullableStringFieldUpdateOperationsInput | string | null
    notes_internes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleInfoCreateInput = {
    id?: string
    plate: string
    marque?: string | null
    modele?: string | null
    carrosserie?: string | null
    couleur?: string | null
    energie?: string | null
    annee?: string | null
    puissance_fiscale?: string | null
    puissance_din?: string | null
    nombre_places?: string | null
    date_mise_en_circulation?: string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VehicleInfoUncheckedCreateInput = {
    id?: string
    plate: string
    marque?: string | null
    modele?: string | null
    carrosserie?: string | null
    couleur?: string | null
    energie?: string | null
    annee?: string | null
    puissance_fiscale?: string | null
    puissance_din?: string | null
    nombre_places?: string | null
    date_mise_en_circulation?: string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VehicleInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    modele?: NullableStringFieldUpdateOperationsInput | string | null
    carrosserie?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    energie?: NullableStringFieldUpdateOperationsInput | string | null
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_fiscale?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_din?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_places?: NullableStringFieldUpdateOperationsInput | string | null
    date_mise_en_circulation?: NullableStringFieldUpdateOperationsInput | string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    modele?: NullableStringFieldUpdateOperationsInput | string | null
    carrosserie?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    energie?: NullableStringFieldUpdateOperationsInput | string | null
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_fiscale?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_din?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_places?: NullableStringFieldUpdateOperationsInput | string | null
    date_mise_en_circulation?: NullableStringFieldUpdateOperationsInput | string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleInfoCreateManyInput = {
    id?: string
    plate: string
    marque?: string | null
    modele?: string | null
    carrosserie?: string | null
    couleur?: string | null
    energie?: string | null
    annee?: string | null
    puissance_fiscale?: string | null
    puissance_din?: string | null
    nombre_places?: string | null
    date_mise_en_circulation?: string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VehicleInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    modele?: NullableStringFieldUpdateOperationsInput | string | null
    carrosserie?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    energie?: NullableStringFieldUpdateOperationsInput | string | null
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_fiscale?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_din?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_places?: NullableStringFieldUpdateOperationsInput | string | null
    date_mise_en_circulation?: NullableStringFieldUpdateOperationsInput | string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    modele?: NullableStringFieldUpdateOperationsInput | string | null
    carrosserie?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    energie?: NullableStringFieldUpdateOperationsInput | string | null
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_fiscale?: NullableStringFieldUpdateOperationsInput | string | null
    puissance_din?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_places?: NullableStringFieldUpdateOperationsInput | string | null
    date_mise_en_circulation?: NullableStringFieldUpdateOperationsInput | string | null
    donnees_brutes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VilleCreateInput = {
    id?: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population?: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux?: VilleCreateavantages_locauxInput | string[]
    prix_specifiques: JsonNullValueInput | InputJsonValue
    points_interet: JsonNullValueInput | InputJsonValue
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    visites?: number
    conversions?: number
    created_at?: Date | string
    updated_at?: Date | string
    diagnostics?: CitySeodiagnosticCreateNestedManyWithoutVilleInput
  }

  export type VilleUncheckedCreateInput = {
    id?: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population?: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux?: VilleCreateavantages_locauxInput | string[]
    prix_specifiques: JsonNullValueInput | InputJsonValue
    points_interet: JsonNullValueInput | InputJsonValue
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    visites?: number
    conversions?: number
    created_at?: Date | string
    updated_at?: Date | string
    diagnostics?: CitySeodiagnosticUncheckedCreateNestedManyWithoutVilleInput
  }

  export type VilleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostics?: CitySeodiagnosticUpdateManyWithoutVilleNestedInput
  }

  export type VilleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostics?: CitySeodiagnosticUncheckedUpdateManyWithoutVilleNestedInput
  }

  export type VilleCreateManyInput = {
    id?: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population?: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux?: VilleCreateavantages_locauxInput | string[]
    prix_specifiques: JsonNullValueInput | InputJsonValue
    points_interet: JsonNullValueInput | InputJsonValue
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    visites?: number
    conversions?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VilleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VilleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticCreateInput = {
    id?: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    ville: VilleCreateNestedOneWithoutDiagnosticsInput
  }

  export type CitySeodiagnosticUncheckedCreateInput = {
    id?: string
    ville_id: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CitySeodiagnosticUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ville?: VilleUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type CitySeodiagnosticUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ville_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticCreateManyInput = {
    id?: string
    ville_id: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CitySeodiagnosticUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ville_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    ville: string
    code_postal: string
    marque: string
    modele: string
    annee?: string | null
    immatriculation: string
    type_diagnostic: string
    commentaires?: string | null
    date_reservation: Date | string
    heure_reservation: string
    prix: Decimal | DecimalJsLike | number | string
    status?: string
    payment_intent_id?: string | null
    payment_status?: string
    payment_method?: string | null
    technician_id?: string | null
    diagnostic_report_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    ville: string
    code_postal: string
    marque: string
    modele: string
    annee?: string | null
    immatriculation: string
    type_diagnostic: string
    commentaires?: string | null
    date_reservation: Date | string
    heure_reservation: string
    prix: Decimal | DecimalJsLike | number | string
    status?: string
    payment_intent_id?: string | null
    payment_status?: string
    payment_method?: string | null
    technician_id?: string | null
    diagnostic_report_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    immatriculation?: StringFieldUpdateOperationsInput | string
    type_diagnostic?: StringFieldUpdateOperationsInput | string
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_reservation?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_intent_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    technician_id?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostic_report_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    immatriculation?: StringFieldUpdateOperationsInput | string
    type_diagnostic?: StringFieldUpdateOperationsInput | string
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_reservation?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_intent_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    technician_id?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostic_report_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    telephone: string
    adresse: string
    ville: string
    code_postal: string
    marque: string
    modele: string
    annee?: string | null
    immatriculation: string
    type_diagnostic: string
    commentaires?: string | null
    date_reservation: Date | string
    heure_reservation: string
    prix: Decimal | DecimalJsLike | number | string
    status?: string
    payment_intent_id?: string | null
    payment_status?: string
    payment_method?: string | null
    technician_id?: string | null
    diagnostic_report_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    immatriculation?: StringFieldUpdateOperationsInput | string
    type_diagnostic?: StringFieldUpdateOperationsInput | string
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_reservation?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_intent_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    technician_id?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostic_report_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    annee?: NullableStringFieldUpdateOperationsInput | string | null
    immatriculation?: StringFieldUpdateOperationsInput | string
    type_diagnostic?: StringFieldUpdateOperationsInput | string
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    date_reservation?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_reservation?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_intent_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    technician_id?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostic_report_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibiliteCreateInput = {
    id?: string
    date: Date | string
    heure: string
    disponible?: boolean
    technicien?: string | null
    region?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DisponibiliteUncheckedCreateInput = {
    id?: string
    date: Date | string
    heure: string
    disponible?: boolean
    technicien?: string | null
    region?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DisponibiliteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    technicien?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibiliteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    technicien?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibiliteCreateManyInput = {
    id?: string
    date: Date | string
    heure: string
    disponible?: boolean
    technicien?: string | null
    region?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DisponibiliteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    technicien?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibiliteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    technicien?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    picture?: string | null
    googleId?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    picture?: string | null
    googleId?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    picture?: string | null
    googleId?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandesSavCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    sujet?: SortOrder
    description?: SortOrder
    fichier_url?: SortOrder
    statut?: SortOrder
    assigne_a?: SortOrder
    notes_internes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DemandesSavMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    sujet?: SortOrder
    description?: SortOrder
    fichier_url?: SortOrder
    statut?: SortOrder
    assigne_a?: SortOrder
    notes_internes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DemandesSavMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    sujet?: SortOrder
    description?: SortOrder
    fichier_url?: SortOrder
    statut?: SortOrder
    assigne_a?: SortOrder
    notes_internes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VehicleInfoCountOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    carrosserie?: SortOrder
    couleur?: SortOrder
    energie?: SortOrder
    annee?: SortOrder
    puissance_fiscale?: SortOrder
    puissance_din?: SortOrder
    nombre_places?: SortOrder
    date_mise_en_circulation?: SortOrder
    donnees_brutes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VehicleInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    carrosserie?: SortOrder
    couleur?: SortOrder
    energie?: SortOrder
    annee?: SortOrder
    puissance_fiscale?: SortOrder
    puissance_din?: SortOrder
    nombre_places?: SortOrder
    date_mise_en_circulation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VehicleInfoMinOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    carrosserie?: SortOrder
    couleur?: SortOrder
    energie?: SortOrder
    annee?: SortOrder
    puissance_fiscale?: SortOrder
    puissance_din?: SortOrder
    nombre_places?: SortOrder
    date_mise_en_circulation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type CitySeodiagnosticListRelationFilter = {
    every?: CitySeodiagnosticWhereInput
    some?: CitySeodiagnosticWhereInput
    none?: CitySeodiagnosticWhereInput
  }

  export type CitySeodiagnosticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VilleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nom?: SortOrder
    region?: SortOrder
    departement?: SortOrder
    code_postal?: SortOrder
    population?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    introduction?: SortOrder
    avantages_locaux?: SortOrder
    prix_specifiques?: SortOrder
    points_interet?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visites?: SortOrder
    conversions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VilleAvgOrderByAggregateInput = {
    population?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visites?: SortOrder
    conversions?: SortOrder
  }

  export type VilleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nom?: SortOrder
    region?: SortOrder
    departement?: SortOrder
    code_postal?: SortOrder
    population?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    introduction?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visites?: SortOrder
    conversions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VilleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nom?: SortOrder
    region?: SortOrder
    departement?: SortOrder
    code_postal?: SortOrder
    population?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    introduction?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visites?: SortOrder
    conversions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VilleSumOrderByAggregateInput = {
    population?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    visites?: SortOrder
    conversions?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type VilleScalarRelationFilter = {
    is?: VilleWhereInput
    isNot?: VilleWhereInput
  }

  export type CitySeodiagnosticCountOrderByAggregateInput = {
    id?: SortOrder
    ville_id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    details?: SortOrder
    suggestions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CitySeodiagnosticAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type CitySeodiagnosticMaxOrderByAggregateInput = {
    id?: SortOrder
    ville_id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    suggestions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CitySeodiagnosticMinOrderByAggregateInput = {
    id?: SortOrder
    ville_id?: SortOrder
    type?: SortOrder
    score?: SortOrder
    suggestions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CitySeodiagnosticSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    code_postal?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    annee?: SortOrder
    immatriculation?: SortOrder
    type_diagnostic?: SortOrder
    commentaires?: SortOrder
    date_reservation?: SortOrder
    heure_reservation?: SortOrder
    prix?: SortOrder
    status?: SortOrder
    payment_intent_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    technician_id?: SortOrder
    diagnostic_report_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    code_postal?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    annee?: SortOrder
    immatriculation?: SortOrder
    type_diagnostic?: SortOrder
    commentaires?: SortOrder
    date_reservation?: SortOrder
    heure_reservation?: SortOrder
    prix?: SortOrder
    status?: SortOrder
    payment_intent_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    technician_id?: SortOrder
    diagnostic_report_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    ville?: SortOrder
    code_postal?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    annee?: SortOrder
    immatriculation?: SortOrder
    type_diagnostic?: SortOrder
    commentaires?: SortOrder
    date_reservation?: SortOrder
    heure_reservation?: SortOrder
    prix?: SortOrder
    status?: SortOrder
    payment_intent_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    technician_id?: SortOrder
    diagnostic_report_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DisponibiliteDateHeureTechnicienCompoundUniqueInput = {
    date: Date | string
    heure: string
    technicien: string
  }

  export type DisponibiliteCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    disponible?: SortOrder
    technicien?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DisponibiliteMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    disponible?: SortOrder
    technicien?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DisponibiliteMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    disponible?: SortOrder
    technicien?: SortOrder
    region?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VilleCreateavantages_locauxInput = {
    set: string[]
  }

  export type CitySeodiagnosticCreateNestedManyWithoutVilleInput = {
    create?: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput> | CitySeodiagnosticCreateWithoutVilleInput[] | CitySeodiagnosticUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: CitySeodiagnosticCreateOrConnectWithoutVilleInput | CitySeodiagnosticCreateOrConnectWithoutVilleInput[]
    createMany?: CitySeodiagnosticCreateManyVilleInputEnvelope
    connect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
  }

  export type CitySeodiagnosticUncheckedCreateNestedManyWithoutVilleInput = {
    create?: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput> | CitySeodiagnosticCreateWithoutVilleInput[] | CitySeodiagnosticUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: CitySeodiagnosticCreateOrConnectWithoutVilleInput | CitySeodiagnosticCreateOrConnectWithoutVilleInput[]
    createMany?: CitySeodiagnosticCreateManyVilleInputEnvelope
    connect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VilleUpdateavantages_locauxInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CitySeodiagnosticUpdateManyWithoutVilleNestedInput = {
    create?: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput> | CitySeodiagnosticCreateWithoutVilleInput[] | CitySeodiagnosticUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: CitySeodiagnosticCreateOrConnectWithoutVilleInput | CitySeodiagnosticCreateOrConnectWithoutVilleInput[]
    upsert?: CitySeodiagnosticUpsertWithWhereUniqueWithoutVilleInput | CitySeodiagnosticUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: CitySeodiagnosticCreateManyVilleInputEnvelope
    set?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    disconnect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    delete?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    connect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    update?: CitySeodiagnosticUpdateWithWhereUniqueWithoutVilleInput | CitySeodiagnosticUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: CitySeodiagnosticUpdateManyWithWhereWithoutVilleInput | CitySeodiagnosticUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: CitySeodiagnosticScalarWhereInput | CitySeodiagnosticScalarWhereInput[]
  }

  export type CitySeodiagnosticUncheckedUpdateManyWithoutVilleNestedInput = {
    create?: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput> | CitySeodiagnosticCreateWithoutVilleInput[] | CitySeodiagnosticUncheckedCreateWithoutVilleInput[]
    connectOrCreate?: CitySeodiagnosticCreateOrConnectWithoutVilleInput | CitySeodiagnosticCreateOrConnectWithoutVilleInput[]
    upsert?: CitySeodiagnosticUpsertWithWhereUniqueWithoutVilleInput | CitySeodiagnosticUpsertWithWhereUniqueWithoutVilleInput[]
    createMany?: CitySeodiagnosticCreateManyVilleInputEnvelope
    set?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    disconnect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    delete?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    connect?: CitySeodiagnosticWhereUniqueInput | CitySeodiagnosticWhereUniqueInput[]
    update?: CitySeodiagnosticUpdateWithWhereUniqueWithoutVilleInput | CitySeodiagnosticUpdateWithWhereUniqueWithoutVilleInput[]
    updateMany?: CitySeodiagnosticUpdateManyWithWhereWithoutVilleInput | CitySeodiagnosticUpdateManyWithWhereWithoutVilleInput[]
    deleteMany?: CitySeodiagnosticScalarWhereInput | CitySeodiagnosticScalarWhereInput[]
  }

  export type VilleCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<VilleCreateWithoutDiagnosticsInput, VilleUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: VilleCreateOrConnectWithoutDiagnosticsInput
    connect?: VilleWhereUniqueInput
  }

  export type VilleUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<VilleCreateWithoutDiagnosticsInput, VilleUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: VilleCreateOrConnectWithoutDiagnosticsInput
    upsert?: VilleUpsertWithoutDiagnosticsInput
    connect?: VilleWhereUniqueInput
    update?: XOR<XOR<VilleUpdateToOneWithWhereWithoutDiagnosticsInput, VilleUpdateWithoutDiagnosticsInput>, VilleUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CitySeodiagnosticCreateWithoutVilleInput = {
    id?: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CitySeodiagnosticUncheckedCreateWithoutVilleInput = {
    id?: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CitySeodiagnosticCreateOrConnectWithoutVilleInput = {
    where: CitySeodiagnosticWhereUniqueInput
    create: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput>
  }

  export type CitySeodiagnosticCreateManyVilleInputEnvelope = {
    data: CitySeodiagnosticCreateManyVilleInput | CitySeodiagnosticCreateManyVilleInput[]
    skipDuplicates?: boolean
  }

  export type CitySeodiagnosticUpsertWithWhereUniqueWithoutVilleInput = {
    where: CitySeodiagnosticWhereUniqueInput
    update: XOR<CitySeodiagnosticUpdateWithoutVilleInput, CitySeodiagnosticUncheckedUpdateWithoutVilleInput>
    create: XOR<CitySeodiagnosticCreateWithoutVilleInput, CitySeodiagnosticUncheckedCreateWithoutVilleInput>
  }

  export type CitySeodiagnosticUpdateWithWhereUniqueWithoutVilleInput = {
    where: CitySeodiagnosticWhereUniqueInput
    data: XOR<CitySeodiagnosticUpdateWithoutVilleInput, CitySeodiagnosticUncheckedUpdateWithoutVilleInput>
  }

  export type CitySeodiagnosticUpdateManyWithWhereWithoutVilleInput = {
    where: CitySeodiagnosticScalarWhereInput
    data: XOR<CitySeodiagnosticUpdateManyMutationInput, CitySeodiagnosticUncheckedUpdateManyWithoutVilleInput>
  }

  export type CitySeodiagnosticScalarWhereInput = {
    AND?: CitySeodiagnosticScalarWhereInput | CitySeodiagnosticScalarWhereInput[]
    OR?: CitySeodiagnosticScalarWhereInput[]
    NOT?: CitySeodiagnosticScalarWhereInput | CitySeodiagnosticScalarWhereInput[]
    id?: UuidFilter<"CitySeodiagnostic"> | string
    ville_id?: UuidFilter<"CitySeodiagnostic"> | string
    type?: StringFilter<"CitySeodiagnostic"> | string
    score?: IntFilter<"CitySeodiagnostic"> | number
    details?: JsonNullableFilter<"CitySeodiagnostic">
    suggestions?: StringNullableFilter<"CitySeodiagnostic"> | string | null
    created_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
    updated_at?: DateTimeFilter<"CitySeodiagnostic"> | Date | string
  }

  export type VilleCreateWithoutDiagnosticsInput = {
    id?: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population?: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux?: VilleCreateavantages_locauxInput | string[]
    prix_specifiques: JsonNullValueInput | InputJsonValue
    points_interet: JsonNullValueInput | InputJsonValue
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    visites?: number
    conversions?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VilleUncheckedCreateWithoutDiagnosticsInput = {
    id?: string
    slug: string
    nom: string
    region: string
    departement: string
    code_postal: string
    population?: number | null
    meta_title: string
    meta_description: string
    introduction: string
    avantages_locaux?: VilleCreateavantages_locauxInput | string[]
    prix_specifiques: JsonNullValueInput | InputJsonValue
    points_interet: JsonNullValueInput | InputJsonValue
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    visites?: number
    conversions?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VilleCreateOrConnectWithoutDiagnosticsInput = {
    where: VilleWhereUniqueInput
    create: XOR<VilleCreateWithoutDiagnosticsInput, VilleUncheckedCreateWithoutDiagnosticsInput>
  }

  export type VilleUpsertWithoutDiagnosticsInput = {
    update: XOR<VilleUpdateWithoutDiagnosticsInput, VilleUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<VilleCreateWithoutDiagnosticsInput, VilleUncheckedCreateWithoutDiagnosticsInput>
    where?: VilleWhereInput
  }

  export type VilleUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: VilleWhereInput
    data: XOR<VilleUpdateWithoutDiagnosticsInput, VilleUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type VilleUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VilleUncheckedUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    meta_title?: StringFieldUpdateOperationsInput | string
    meta_description?: StringFieldUpdateOperationsInput | string
    introduction?: StringFieldUpdateOperationsInput | string
    avantages_locaux?: VilleUpdateavantages_locauxInput | string[]
    prix_specifiques?: JsonNullValueInput | InputJsonValue
    points_interet?: JsonNullValueInput | InputJsonValue
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    visites?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    picture?: string | null
    googleId?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    picture?: string | null
    googleId?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticCreateManyVilleInput = {
    id?: string
    type: string
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CitySeodiagnosticUpdateWithoutVilleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticUncheckedUpdateWithoutVilleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitySeodiagnosticUncheckedUpdateManyWithoutVilleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    suggestions?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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