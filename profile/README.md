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
| [inventory-service](https://github.com/elara-app/inventory-service) | `develop` | [46b9ac4](https://github.com/elara-app/inventory-service/commit/46b9ac40886f5e2850a1467c514217939d89cf41) | 10/1/2025, 3:41:54 PM | Merge pull request #39 from elara-app/release/new-uom-service-consume  chore(pom): update version from 1.1 to 1.2 | [julianbetov](https://github.com/julianbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [bfeb57a](https://github.com/elara-app/.github/commit/bfeb57a978a086a5fb571f07a78424b993c8fcc7) | 10/2/2025, 10:08:41 AM | Update commits table in README | [readme-updater-from-elara[bot]](https://github.com/apps/readme-updater-from-elara) |
| [validations-test](https://github.com/elara-app/validations-test) | `main` | [32a7d4f](https://github.com/elara-app/validations-test/commit/32a7d4f7afdb2805267a6345143881f6962f6350) | 7/5/2025, 5:46:27 PM | Merge pull request #31 from elara-app/hotfix/give-package-permissions-to-ci-shared-workflow-from-release  Grant package write permissions to CI shared workflow from release | [julianbetov](https://github.com/julianbetov) |
| [unit-of-measure-service](https://github.com/elara-app/unit-of-measure-service) | `develop` | [d14239d](https://github.com/elara-app/unit-of-measure-service/commit/d14239dd7fb4f3ba92c3048e31814e4c336ba97a) | 9/30/2025, 7:17:38 PM | Merge pull request #22 from elara-app/release/add-discovery-client-feat  chore(pom): update version to 1.1 | [julianbetov](https://github.com/julianbetov) |
| [config-service](https://github.com/elara-app/config-service) | `develop` | [d3dd1cd](https://github.com/elara-app/config-service/commit/d3dd1cd909e9a6c639146f93a11caf6988e07567) | 10/1/2025, 7:05:34 PM | initialize config-service project with Maven setup and basic application structure | [julianbetov](https://github.com/julianbetov) |
| [discovery-service](https://github.com/elara-app/discovery-service) | `main` | [8d1ebaf](https://github.com/elara-app/discovery-service/commit/8d1ebafca6feee5b7779d9b4df532c0f3338910d) | 9/30/2025, 7:05:05 PM | Merge pull request #3 from elara-app/develop  Develop | [julianbetov](https://github.com/julianbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [9717006](https://github.com/elara-app/centralized-configuration/commit/9717006e33e5da23468c39e9133b34c99c4a8263) | 10/1/2025, 9:21:56 PM | Merge pull request #3 from elara-app/develop  Develop | [julianbetov](https://github.com/julianbetov) |

_Last updated: 10/2/2025, 11:01:23 AM_
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