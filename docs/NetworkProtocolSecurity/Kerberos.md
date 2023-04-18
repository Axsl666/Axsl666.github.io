---
sidebar_position: 3
---

# Kerberos协议

![Kerberos_protocol](assets/Kerberos_protocol.svg)

Single Sign On

## Kerberos协议原理

### 源起

The Kerberos model is based in part on Needham and Schroeder's trusted third-party authentication protocol and on modifications   suggested by Denning and Sacco.

- 源自 Needham-Schroeder的一种认证协议
- 软件 Kerberos V5
- MIT Project Athena的产物
- RFC 1510 – Kerberos V5 (1992)
- RFC4120 - 2005
- 集成到 Windows 2000+
- 集成到Unix的多个版本以及应用中

## Kerberos基本概念

- Principal(安全个体)
  - 被认证的个体，有一个名字(name)和口令(password)
- KDC (Key distribution center)
  - 是一个网络服务，提供ticket和临时的会话密钥，由两个服务组成
- Ticket
  - 一个记录，客户可以用它来向服务器证明自己的身份，其中包括客户的标识、会话密钥、时间戳，以及其他一些信息。Ticket 中的大多数信息都被加密，密钥为服务器的密钥
- Authenticator
  - 一个记录，其中包含一些最近产生的信息，产生这些信息需要用到客户和服务器之间共享的会话密钥
- Credentials
  - 一个ticket加上一个秘密的会话密钥

## Kerberos Principal

- Authentication Server (AS) 
  - 通过 long-term key认证客户
  - AS 给予客户 ticket granting ticket 和 short-term key
  - 认证服务
- Ticket Granting Server (TGS) 
  - 通过 short-term key 和 ticket granting ticket认证客户
  - TGS 发放 tickets 给客户以访问其他的服务器
  - 授权和访问控制服务

## 设计动机

- 认证和授权的逻辑分离
  - 虽然AS和TGS物理上常在一起
- 不同的生命周期
  - ticket granting tickets (typically 10 hours), session tickets for actual access to services (typically 5 minutes).
  - 方便客户
  - 降低密钥的暴露时间

## 认证过程

完整的认证流程，有客户端与AS, TGS, AP的3次交互，每次交互，响应包都会包含两条信息，一条可以用本地密钥解密，另一条需要转发。

