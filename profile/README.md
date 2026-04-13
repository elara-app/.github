![Elara logo](../images/complete-logo.png)
# Welcome to Elara

**Elara** is a microservices backend focused on **inventory management** and **unit-of-measure governance**.

This project was conceived and developed autonomously by [@andresbetov](https://github.com/andresbetov), with a strong focus on production-grade software practices, long-term maintainability, and technical clarity.

---

## Implemented scope (current)

Elara currently implements two core business capabilities:

1. **Inventory domain** (`inventory-service`): inventory item lifecycle management (create, update, delete, get by id, pagination, and search).
2. **Unit-of-measure domain** (`unit-of-measure-service`): UOM catalog and UOM status lifecycle used as reference data for inventory validation.

The rest of the platform services support these domains as infrastructure components.

---

## Implemented APIs (high-level)

| Service | Base path | Implemented operations |
| --- | --- | --- |
| `inventory-service` | `/item/` | Create, update, delete, get by id, paginated list, paginated name search |
| `unit-of-measure-service` | `/` and `/status/` | UOM CRUD, UOM status CRUD, status-based filtering, status association/usability changes |

Detailed contracts and examples are documented in each service repository:
- [inventory-service README](https://github.com/elara-app/inventory-service/blob/develop/README.md)
- [unit-of-measure-service README](https://github.com/elara-app/unit-of-measure-service/blob/develop/README.md)

---

## Service architecture

Elara is structured as a decoupled Spring Cloud ecosystem where each service owns a specific responsibility:

| Component | Technical role |
| --- | --- |
| `api-gateway` | Single entry point for clients, routing requests to internal services. |
| `discovery-service` | Eureka service registry for dynamic service lookup and resilient routing. |
| `config-service` | Centralized configuration server for environment-aware runtime properties. |
| `centralized-configuration` | Versioned configuration repository (`dev`, `test`, `prod`) consumed by Config Server. |
| `unit-of-measure-service` | Reference-data service for UOM catalog and status governance. |
| `inventory-service` | Domain service for inventory item lifecycle and stock-related master data. |

This separation of concerns enables independent evolution, safer deployments, and clear service ownership boundaries.

---

## Runtime flow

1. Clients call `api-gateway`.
2. Gateway resolves target services through `discovery-service`.
3. Services bootstrap configuration from `config-service`, backed by `centralized-configuration`.
4. `inventory-service` validates UOM dependencies against `unit-of-measure-service` through discovery-aware service communication.
5. Secrets are sourced via Vault integration in supported profiles.

This model keeps domain services focused on business rules while platform services handle cross-cutting infrastructure concerns.

---

## Engineering quality standards

- **Layered architecture** (`controller -> service -> repository -> mapper -> DTO`), with explicit boundaries and low coupling.
- **Strict validation** at API and persistence levels (`jakarta.validation`, entity constraints).
- **Centralized error contracts** using typed exception hierarchies and global handlers.
- **OpenAPI-first documentation** with reusable schemas and concrete JSON examples.
- **Testing discipline** across controller, service, repository, mapper, exception, and utility layers.
- **Build-enforced quality gates** with JaCoCo thresholds in Maven lifecycle.
- **Externalized configuration and secret management** (Config Server + profile-specific config + Vault integration).
- **Production-friendly observability patterns** via structured logging conventions and explicit operational contracts.

These are implementation-level decisions that directly improve reliability, maintainability, and scalability.

---

## Evidence-backed quality references

- **Quality gates in build** (JaCoCo thresholds enforced in Maven lifecycle):
  - [inventory-service `pom.xml`](https://github.com/elara-app/inventory-service/blob/develop/pom.xml)
  - [unit-of-measure-service `pom.xml`](https://github.com/elara-app/unit-of-measure-service/blob/develop/pom.xml)
- **Testing standards and patterns**:
  - [inventory-service `TESTING_GUIDE.md`](https://github.com/elara-app/inventory-service/blob/develop/TESTING_GUIDE.md)
  - [unit-of-measure-service `TESTING_GUIDE.md`](https://github.com/elara-app/unit-of-measure-service/blob/develop/TESTING_GUIDE.md)
- **Service-level architecture and runtime contracts**:
  - [api-gateway README](https://github.com/elara-app/api-gateway/blob/main/README.md)
  - [config-service README](https://github.com/elara-app/config-service/blob/main/README.md)
  - [discovery-service README](https://github.com/elara-app/discovery-service/blob/main/README.md)
  - [centralized-configuration README](https://github.com/elara-app/centralized-configuration/blob/main/README.md)

---

## Out of scope (current profile scope)

This README intentionally describes only what is currently documented and implemented in this architecture scope:
- inventory item management,
- unit-of-measure and unit-of-measure-status management,
- the platform services that support those domains (gateway, discovery, config, centralized configuration).

It does **not** claim additional implemented business modules in this profile beyond that scope.

---

## Project activity
> Automatically synchronized list of repositories and latest commits in the Elara organization.

<!-- COMMITS-TABLE:START -->
| Repository | Branch | Commit | Date (UTC) | Message | Author |
| --- | --- | --- | --- | --- | --- |
| [inventory-service](https://github.com/elara-app/inventory-service) | `develop` | [4c45604](https://github.com/elara-app/inventory-service/commit/4c456043c04bb3ec75242c7b280c9b0760db8e22) | 4/12/2026, 8:19:40 PM | Merge pull request #59 from elara-app/feature/improve-readme-file  docs(README.md): enhance project description and service interaction … | [andresbetov](https://github.com/andresbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [aebeece](https://github.com/elara-app/.github/commit/aebeecebb9658742b28cfd282911e104677bbb52) | 4/13/2026, 1:47:53 AM | Merge pull request #8 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [unit-of-measure-service](https://github.com/elara-app/unit-of-measure-service) | `develop` | [1ad7a3f](https://github.com/elara-app/unit-of-measure-service/commit/1ad7a3f749d6bba7022c76ca91638a92766ee3cd) | 4/12/2026, 8:10:27 PM | Merge pull request #45 from elara-app/hotfix/fix-list-in-readme  Hotfix/fix list in readme | [andresbetov](https://github.com/andresbetov) |
| [config-service](https://github.com/elara-app/config-service) | `main` | [6c24f3d](https://github.com/elara-app/config-service/commit/6c24f3d42b256cde96e74a6fe8790ce4cee806bd) | 4/11/2026, 3:20:23 AM | Merge pull request #9 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [discovery-service](https://github.com/elara-app/discovery-service) | `main` | [f52da57](https://github.com/elara-app/discovery-service/commit/f52da57708a885106731f21e85a47d8783d17c30) | 4/12/2026, 12:52:39 AM | Merge pull request #5 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [dabb25f](https://github.com/elara-app/centralized-configuration/commit/dabb25f4f992d76aa6c299767de1f659870e5511) | 4/11/2026, 3:28:27 AM | Merge pull request #21 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [api-gateway](https://github.com/elara-app/api-gateway) | `main` | [ecf52ad](https://github.com/elara-app/api-gateway/commit/ecf52ad336aa56ac4c157b6161f9ac340aa2c92f) | 4/11/2026, 11:56:54 PM | Merge pull request #6 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |

_Last updated: 4/13/2026, 1:48:54 AM_
<!-- COMMITS-TABLE:END -->
---

## How this profile stays up to date

The commits table above is maintained by an automated updater in the `.github` repository, using GitHub App authentication and targeted README updates.  
Implementation details are available here: [elara-app/.github/src](https://github.com/elara-app/.github/tree/main/src).

### Companion step-by-step creation guide

For readers who want full technical context, this project is accompanied by a 281-page guide that documents the architecture from zero, explains why each major decision was made, details trade-offs (pros/cons), and describes the quality framework and engineering standards applied across implementation: [Creating Elara App - Software Development](https://docs.google.com/document/d/1eJTg3-qAXy3PJtfzBTZdcgy597JHPAEZ2ok6tBuj8Co/edit?usp=sharing).
