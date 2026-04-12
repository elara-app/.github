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
| [inventory-service](https://github.com/elara-app/inventory-service) | `develop` | [81b34ff](https://github.com/elara-app/inventory-service/commit/81b34ffa9ea00aa9c31483d7e30d0e62423b71d3) | 4/7/2026, 3:05:30 AM | Merge branch 'main' into develop | [andresbetov](https://github.com/andresbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [9404884](https://github.com/elara-app/.github/commit/9404884a6be2cb8b715aa60b6d96f82a8667132a) | 4/12/2026, 10:25:53 AM | Update commits table in README | [readme-updater-from-elara[bot]](https://github.com/apps/readme-updater-from-elara) |
| [validations-test](https://github.com/elara-app/validations-test) | `main` | [32a7d4f](https://github.com/elara-app/validations-test/commit/32a7d4f7afdb2805267a6345143881f6962f6350) | 7/5/2025, 5:46:27 PM | Merge pull request #31 from elara-app/hotfix/give-package-permissions-to-ci-shared-workflow-from-release  Grant package write permissions to CI shared workflow from release | [andresbetov](https://github.com/andresbetov) |
| [unit-of-measure-service](https://github.com/elara-app/unit-of-measure-service) | `main` | [33d1c76](https://github.com/elara-app/unit-of-measure-service/commit/33d1c763f456802d995a7753c419975dae066542) | 4/11/2026, 12:35:43 AM | Merge pull request #40 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [config-service](https://github.com/elara-app/config-service) | `main` | [6c24f3d](https://github.com/elara-app/config-service/commit/6c24f3d42b256cde96e74a6fe8790ce4cee806bd) | 4/11/2026, 3:20:23 AM | Merge pull request #9 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [discovery-service](https://github.com/elara-app/discovery-service) | `main` | [f52da57](https://github.com/elara-app/discovery-service/commit/f52da57708a885106731f21e85a47d8783d17c30) | 4/12/2026, 12:52:39 AM | Merge pull request #5 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [dabb25f](https://github.com/elara-app/centralized-configuration/commit/dabb25f4f992d76aa6c299767de1f659870e5511) | 4/11/2026, 3:28:27 AM | Merge pull request #21 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |
| [api-gateway](https://github.com/elara-app/api-gateway) | `main` | [ecf52ad](https://github.com/elara-app/api-gateway/commit/ecf52ad336aa56ac4c157b6161f9ac340aa2c92f) | 4/11/2026, 11:56:54 PM | Merge pull request #6 from elara-app/develop  Develop | [andresbetov](https://github.com/andresbetov) |

_Last updated: 4/12/2026, 11:23:54 AM_
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