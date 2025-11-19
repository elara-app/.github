![Alt text](../images/complete-logo.png "a title")
# 🍜 Welcome to Elara

**Elara** is a personal project turned into a professional-grade solution — an application designed to simplify and optimize operations in **restaurants, gastrobars, and restobars**. Built with passion by a **Systems Engineering student and software development enthusiast** ([@julianbetov](https://github.com/julianbetov)), Elara combines practical business logic with clean backend architecture.

---

## 🍚 What Elara Does

> All-in-one system to help modern food businesses manage their backend operations with clarity and control.

Elara  allows for efficient management of users and roles, inventory and stock levels, product catalogs with variants, recipe creation based on ingredients, and order tracking. Additionally, it provides tools for logging business activities and monitoring financial data, including income and expenses — offering full visibility and control over daily operations.

---

## 👩‍🚀 Our Progress
> Note: This section is constantly improving, stay tuned for new things we're working on.

> (List of repositories that make Elera possible)
<!-- COMMITS-TABLE:START -->
| Repository | Branch | Commit | Date (UTC) | Message | Author |
| --- | --- | --- | --- | --- | --- |
| [demo-repository](https://github.com/elara-app/demo-repository) | `test-branch` | [6bc3cad](https://github.com/elara-app/demo-repository/commit/6bc3cad5532e9f2caeda50d80fc76ebd09af0feb) | 6/14/2025, 8:45:23 PM | New commit | [julianbetov](https://github.com/julianbetov) |
| [inventory-service](https://github.com/elara-app/inventory-service) | `feature/refactor-code` | [30f6848](https://github.com/elara-app/inventory-service/commit/30f6848245549801fa5a1cf50df28808034f00fb) | 11/10/2025, 2:55:36 PM | refactor(pom): add spring-boot-starter-actuator dependency | [julianbetov](https://github.com/julianbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [63d092e](https://github.com/elara-app/.github/commit/63d092e964073ab5049403e4515fcc133e2cf620) | 11/19/2025, 9:10:38 AM | Update commits table in README | [readme-updater-from-elara[bot]](https://github.com/apps/readme-updater-from-elara) |
| [validations-test](https://github.com/elara-app/validations-test) | `main` | [32a7d4f](https://github.com/elara-app/validations-test/commit/32a7d4f7afdb2805267a6345143881f6962f6350) | 7/5/2025, 5:46:27 PM | Merge pull request #31 from elara-app/hotfix/give-package-permissions-to-ci-shared-workflow-from-release  Grant package write permissions to CI shared workflow from release | [julianbetov](https://github.com/julianbetov) |
| [unit-of-measure-service](https://github.com/elara-app/unit-of-measure-service) | `feature/refactor-code` | [ea91877](https://github.com/elara-app/unit-of-measure-service/commit/ea91877236c28b2fda5069453a453739636748f2) | 11/10/2025, 7:23:20 PM | refactor(tests): update UomStatusControllerTest and UomStatusServiceImpTest for clarity and consistency | [julianbetov](https://github.com/julianbetov) |
| [config-service](https://github.com/elara-app/config-service) | `develop` | [fec63b4](https://github.com/elara-app/config-service/commit/fec63b4e8478c4e5c5efb4e803ef10fc925f3145) | 11/1/2025, 10:10:02 PM | feat(config): update application.yml for server port and active profile | [julianbetov](https://github.com/julianbetov) |
| [discovery-service](https://github.com/elara-app/discovery-service) | `main` | [8d1ebaf](https://github.com/elara-app/discovery-service/commit/8d1ebafca6feee5b7779d9b4df532c0f3338910d) | 9/30/2025, 7:05:05 PM | Merge pull request #3 from elara-app/develop  Develop | [julianbetov](https://github.com/julianbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [ed969bc](https://github.com/elara-app/centralized-configuration/commit/ed969bc518b93a32f3210358e2d908c6e8a549bf) | 11/2/2025, 10:26:17 PM | Refactor API gateway configuration by removing management and logging sections for clarity | [julianbetov](https://github.com/julianbetov) |
| [api-gateway](https://github.com/elara-app/api-gateway) | `feature/initial-setup` | [e9b72b5](https://github.com/elara-app/api-gateway/commit/e9b72b5d8aaa3d877e48ce68a22e9f90d7f1a8a7) | 11/2/2025, 11:31:43 PM | feat(pom): add Spring WebFlux and Spring Cloud dependencies to pom.xml | [julianbetov](https://github.com/julianbetov) |

_Last updated: 11/19/2025, 10:10:01 AM_
<!-- COMMITS-TABLE:END -->
---

## 🔨 How are we creating Elara?
- The table above is a production-ready automation tool for keeping a section of a GitHub organization's README synchronized with the live repository's data, using modern Node.js, the GitHub API, and software engineering best practices. [See code here](https://github.com/elara-app/.github/tree/main/src). 
    
    **Key points:**
    - Separation of concerns y modularity.
    - professional GitHub App authentication (Uses GitHub App installation authentication, not a personal token).
    - Dynamic Data Fetching.
    - Markdown Table Rendering.
    - Safe, targeted README updates.
    - Direct GitHub integration.
    - Robust logging & Error handling.

### 🧑‍💻 Development of other services
The Elara's backend is developed with a decoupled **microservices architecture**, each with its own **PostgreSQL database**, asynchronous communication via **Kafka** or **RabbitMQ**, centralized configuration with **Spring Cloud Config Server**, and exposure through an **API Gateway**. It is containerized with **Docker**, orchestrated with **Kubernetes**, and automated with **GitHub Actions** under a **Git Flow**, enabling **professional CI/CD**, **horizontal scalability**, and **cloud deployment** (AWS, Azure, or GCP). It includes **OAuth2 and JWT authentication**, robust validations, centralized error handling, structured logging, and automatic documentation with **Swagger**. And more.

Its design allows it to support **high traffic**, **guarantee security** and **availability**, and facilitate **system maintenance** and **evolution**. It is ideal for medium-sized or large companies that need a solid, scalable, production-ready foundation, or for startups looking for a modern architecture ready to grow without rewriting from scratch.

> Note: This document currently shows the entire development process of the elara application (we are still working on it): [Creating Elara App - Development Software](https://docs.google.com/document/d/1eJTg3-qAXy3PJtfzBTZdcgy597JHPAEZ2ok6tBuj8Co/edit?usp=sharing)