export const blogs = [
  {
    id: 1,
    slug: "system-design-architecture",
    title: "System Design and Architecture for Large-Scale Applications",
    excerpt: "Master the principles of designing robust, scalable systems that can handle millions of users and data.",
    date: "April 10, 2025",
    author: "Limon Chandra Ray",
    category: "Architecture",
    readTime: "15 min read",
    content: `
# System Design and Architecture for Large-Scale Applications

As a senior software engineer, understanding system design is crucial. This comprehensive guide covers the principles and patterns used by leading tech companies to build scalable systems.

## Core Principles

### Scalability

Vertical scaling (adding more power) has limits. Horizontal scaling (adding more machines) is the way to go.

\`\`\`
┌─────────────┐
│   Load      │
│ Balancer    │
└──────┬──────┘
       │
    ┌──┴──┐
    │     │
┌───▼─┐ ┌─▼───┐
│ App │ │ App │
└─────┘ └─────┘
\`\`\`

### Reliability

System should continue operating even when components fail:

- **Redundancy**: Duplicate critical components
- **Monitoring**: Track system health continuously
- **Graceful Degradation**: Reduce functionality safely when needed

### Availability

Design for high availability (99.9%, 99.99%, 99.999%):

- Multi-region deployment
- Database replication
- Failover mechanisms
- Backup systems

## Database Design

### Choosing Between SQL and NoSQL

**SQL Databases**:
- ACID transactions
- Complex queries
- Relational data
- Examples: PostgreSQL, MySQL

**NoSQL Databases**:
- High throughput
- Flexible schema
- Horizontal scalability
- Examples: MongoDB, DynamoDB, Cassandra

### Database Sharding

Distribute data across multiple databases:

\`\`\`javascript
// Shard key: user_id % num_shards
function getShardId(userId, numShards) {
  return userId % numShards;
}

// User 1 → Shard 1
// User 2 → Shard 2
// User 3 → Shard 0
\`\`\`

## Caching Strategies

### Cache Layers

\`\`\`
Request
   ↓
Browser Cache (1 hour)
   ↓
CDN Cache (1 day)
   ↓
App Cache (Redis - 30 min)
   ↓
Database (Persistent)
\`\`\`

### Cache Invalidation Patterns

1. **TTL (Time-to-Live)**: Auto-expire after set time
2. **Event-Based**: Invalidate on data changes
3. **LRU (Least Recently Used)**: Remove least used items
4. **Write-Through**: Update cache before database

## Message Queues

Decouple services and handle asynchronous tasks:

\`\`\`javascript
// Producer
queue.publish('order.created', {
  orderId: 123,
  userId: 456
});

// Consumer
queue.subscribe('order.created', async (message) => {
  const order = message.data;
  await sendConfirmationEmail(order.userId);
  await updateInventory(order);
});
\`\`\`

## API Design

### RESTful Principles

\`\`\`
GET    /api/users           // List users
POST   /api/users           // Create user
GET    /api/users/{id}      // Get single user
PUT    /api/users/{id}      // Update user
DELETE /api/users/{id}      // Delete user
\`\`\`

### GraphQL Alternative

More flexible than REST:

\`\`\`graphql
query GetUserOrders($userId: ID!) {
  user(id: $userId) {
    id
    name
    orders {
      id
      total
      items {
        name
        price
      }
    }
  }
}
\`\`\`

## Monitoring and Observability

### Key Metrics

- **Latency**: Response time
- **Traffic**: Requests per second
- **Errors**: Error rate
- **Saturation**: Resource utilization

### Logging Strategies

\`\`\`javascript
// Structured logging
logger.info({
  timestamp: new Date().toISOString(),
  level: 'INFO',
  service: 'auth-service',
  userId: user.id,
  action: 'login_success',
  duration: '125ms'
});
\`\`\`

## Security Considerations

1. **Authentication**: Verify user identity
2. **Authorization**: Check permissions
3. **Data Encryption**: Encrypt in transit and at rest
4. **Input Validation**: Prevent injection attacks
5. **Rate Limiting**: Prevent abuse

## Conclusion

System design is about making trade-offs between scalability, reliability, and complexity. By understanding these patterns, you can architect systems that grow with your business needs.
    `
  },
  {
    id: 2,
    slug: "code-quality-best-practices",
    title: "Code Quality and Clean Code Principles",
    excerpt: "Write maintainable, readable code that scales with team growth and reduces technical debt.",
    date: "April 5, 2025",
    author: "Limon Chandra Ray",
    category: "Best Practices",
    readTime: "11 min read",
    content: `
# Code Quality and Clean Code Principles

High-quality code is maintainable, testable, and efficient. As a senior engineer, this should be your standard.

## SOLID Principles

### Single Responsibility Principle

Each class/function should have one reason to change:

\`\`\`javascript
// Bad: Multiple responsibilities
class User {
  constructor(name) {
    this.name = name;
  }
  
  save() { /* Save to database */ }
  sendEmail() { /* Send notification */ }
  validateEmail() { /* Validate */ }
}

// Good: Separated concerns
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserRepository {
  save(user) { /* Database logic */ }
}

class EmailService {
  send(user) { /* Email logic */ }
}

class UserValidator {
  validateEmail(email) { /* Validation */ }
}
\`\`\`

### Open/Closed Principle

Open for extension, closed for modification:

\`\`\`javascript
// Good: Extensible without modification
class DiscountCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  calculate(price) {
    return this.strategy.apply(price);
  }
}

class StudentDiscount {
  apply(price) {
    return price * 0.9;
  }
}

class SeniorDiscount {
  apply(price) {
    return price * 0.8;
  }
}
\`\`\`

### Liskov Substitution Principle

Derived classes should be substitutable for base classes:

\`\`\`javascript
// Good: Can replace Bird with any subclass safely
class Bird {
  fly() { /* Default implementation */ }
}

class Sparrow extends Bird {
  fly() {
    return "Flying at 20mph";
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly");
  }
}

// Better: Separate flying behavior
class Bird { }

class FlyingBird extends Bird {
  fly() { }
}

class NonFlyingBird extends Bird { }

class Penguin extends NonFlyingBird { }
\`\`\`

## Code Formatting and Style

### Consistent Naming

\`\`\`javascript
// Bad
const d = new Date();
const arr = [1, 2, 3];
function fn(x, y) { }

// Good
const currentDate = new Date();
const userIds = [1, 2, 3];
function calculateTotal(price, quantity) { }
\`\`\`

### Meaningful Comments

\`\`\`javascript
// Bad: Obvious comment
const age = 18; // Check if 18

// Good: Explains why
const LEGAL_DRINKING_AGE = 18; // Must be 21 in some states

// Good: Complex logic explanation
const sortedUsers = users.sort((a, b) => {
  // Sort by active status first, then by last login
  // Active users appear first for better engagement
  if (a.isActive !== b.isActive) {
    return b.isActive ? 1 : -1;
  }
  return b.lastLogin - a.lastLogin;
});
\`\`\`

## Refactoring Techniques

### Extract Method

\`\`\`javascript
// Before
function calculateInvoiceTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
    if (item.quantity > 10) {
      total *= 0.9; // Bulk discount
    }
  }
  return total;
}

// After
function calculateInvoiceTotal(items) {
  return items.reduce((total, item) => {
    return total + calculateLineTotal(item);
  }, 0);
}

function calculateLineTotal(item) {
  const subtotal = item.price * item.quantity;
  return item.quantity > 10 ? subtotal * 0.9 : subtotal;
}
\`\`\`

## Testing Strategies

### Unit Tests

\`\`\`javascript
describe('UserValidator', () => {
  it('should validate email format', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
  });
  
  it('should require minimum password length', () => {
    expect(isStrongPassword('ab')).toBe(false);
    expect(isStrongPassword('SecurePass123!')).toBe(true);
  });
});
\`\`\`

### Integration Tests

Test interactions between components:

\`\`\`javascript
describe('User Registration Flow', () => {
  it('should create user and send confirmation email', async () => {
    const result = await registerUser({
      email: 'new@example.com',
      password: 'SecurePass123!'
    });
    
    expect(result.success).toBe(true);
    expect(emailService.sendConfirmation).toHaveBeenCalled();
  });
});
\`\`\`

## Performance Optimization

### Algorithm Complexity

\`\`\`javascript
// O(n²) - Slow for large datasets
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// O(n) - Much better
function hasDuplicate(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}
\`\`\`

## Documentation

### Self-Documenting Code

\`\`\`javascript
// Bad: Unclear intent
const x = users.filter(u => u.age > 18 && u.status === 'active');

// Good: Clear intent
const activeAdultUsers = users.filter(user => 
  user.age > LEGAL_AGE && user.status === 'ACTIVE'
);
\`\`\`

## Conclusion

Code quality is not just about making it work—it's about making it work well, efficiently, and maintainably for years to come.
    `
  },
  {
    id: 3,
    slug: "team-leadership-mentoring",
    title: "Team Leadership and Mentoring Skills",
    excerpt: "Guide and develop junior engineers while building high-performing teams with strong communication.",
    date: "March 28, 2025",
    author: "Limon Chandra Ray",
    category: "Leadership",
    readTime: "10 min read",
    content: `
# Team Leadership and Mentoring Skills

Senior engineers don't just write code—they build teams. Here's how to be an effective leader and mentor.

## The Multiplier Effect

As a senior engineer, your impact multiplies through your team. A single brilliant engineer is valuable, but a team of competent engineers is invaluable.

## Effective Mentoring

### 1. Set Clear Expectations

\`\`\`
┌─────────────────────────────────┐
│ Mentoring Relationship          │
├─────────────────────────────────┤
│ Goals: What do they want to     │
│        learn? What's the        │
│        timeline?                │
│                                 │
│ Frequency: Weekly 1-on-1s       │
│ Style: Coaching vs directing    │
│ Success Metrics: How to measure │
└─────────────────────────────────┘
\`\`\`

### 2. Ask Questions, Don't Just Give Answers

\`\`\`
❌ Wrong: "You should use a hash map here"

✓ Right: "What's the time complexity of your current 
           approach? What data structures could optimize it?"
\`\`\`

### 3. Code Review as Teaching Tool

\`\`\`javascript
// Instead of just: "Fix this"
// Provide context:

// Good comment
// This query will scan the entire table without an index.
// Consider adding an index on the 'user_id' column.
// See performance investigation in JIRA-123
// Reference: Database Optimization Guide in wiki

// Even better: Share knowledge
// This is an N+1 query problem. In a loop, we often 
// accidentally query once per item. Let's discuss 
// batch fetching strategies.
\`\`\`

## Building High-Performing Teams

### Psychological Safety

Team members must feel safe to:
- Admit mistakes
- Ask "dumb" questions
- Propose unconventional ideas
- Respectfully disagree

### Clear Communication

\`\`\`
Good standup format:
- What did I complete?
- What will I work on today?
- What blockers exist?
- Do I need help from anyone?
\`\`\`

### Distributed Decision Making

Not every decision requires your approval:

\`\`\`
Level 1: Junior engineer decides
Level 2: Junior engineer decides, mentions to lead
Level 3: Junior engineer proposes, lead decides
Level 4: Senior engineer decides, informs team
Level 5: Significant technical decision requiring discussion
\`\`\`

## Handling Difficult Conversations

### Performance Issues

\`\`\`
Structure:
1. Be specific: "In the last sprint, 3 PRs had quality issues"
2. Impact: "This caused delays and affects team trust"
3. Expectations: "Going forward, we need X and Y"
4. Support: "Here's how I can help you improve"
5. Timeline: "Let's revisit this in 2 weeks"
\`\`\`

### Giving Constructive Feedback

\`\`\`
Bad: "Your code quality is poor"

Good: "I noticed the error handling could be more robust.
       Let's look at these examples together, and I can
       show you patterns that handle this better."
\`\`\`

## Technical Discussions

### Leading Architecture Reviews

\`\`\`
Agenda:
1. Problem statement (15 min)
2. Current limitations (10 min)
3. Proposed solution (20 min)
4. Trade-offs (15 min)
5. Questions and discussion (20 min)
6. Decision framework (10 min)
\`\`\`

### Design Review Questions

1. Does this solve the stated problem?
2. Have we considered edge cases?
3. What's the operational burden?
4. How do we monitor this?
5. Is the implementation the simplest viable solution?
6. What could go wrong, and how do we handle it?

## Career Development

### Individual Growth Plans

\`\`\`
3-Month Goals:
- Technical: Master microservices architecture
- Soft Skills: Improve public speaking
- Leadership: Lead one design discussion

6-Month Goals:
- Take on mentoring responsibility
- Lead a significant project
- Contribute to technical documentation

12-Month Goals:
- Promotion readiness
- Team scaling
- Knowledge sharing platform
\`\`\`

## Building Documentation Culture

Encourage knowledge sharing:

\`\`\`
- Decision Records (ADRs)
- Architecture diagrams
- Runbooks for incidents
- API documentation
- Best practices guide
- On-call procedures
\`\`\`

## Delegation

Effective delegation multiplies your impact:

\`\`\`javascript
const delegationFramework = {
  task: "Migration from Mongo to PostgreSQL",
  assignee: juniorEngineer,
  checkpoints: [
    { date: "Week 1", milestone: "Schema design complete" },
    { date: "Week 2", milestone: "Data migration scripted" },
    { date: "Week 3", milestone: "Testing complete" }
  ],
  supportLevel: "Weekly pairing + async review",
  decision: "Final verification by me"
};
\`\`\`

## Conclusion

Leadership is about multiplying your impact through others. By mentoring, communicating clearly, and building psychological safety, you create teams that achieve remarkable things.
    `
  },
  {
    id: 4,
    slug: "performance-scalability",
    title: "Advanced Performance Optimization and Scalability",
    excerpt: "Identify bottlenecks, optimize critical paths, and scale systems to handle exponential growth.",
    date: "March 20, 2024",
    author: "Limon Chandra Ray",
    category: "Performance",
    readTime: "14 min read",
    content: `
# Advanced Performance Optimization and Scalability

Performance is a feature. As a senior engineer, optimizing system performance is critical.

## Performance Profiling

### Identifying Bottlenecks

\`\`\`javascript
// JavaScript profiling
console.time('dataFetch');
const data = await fetchLargeDataset();
console.timeEnd('dataFetch');

// Result: dataFetch: 2345.67ms
// This is where we should focus optimization
\`\`\`

### The 80/20 Rule

- 80% of performance issues come from 20% of the code
- Profile before optimizing
- Focus on the critical path

\`\`\`
┌──────────────────┐
│ API Request      │
├──────────────────┤
│ Auth Check: 10ms │ ← Fast
│ DB Query: 800ms  │ ← Slow (focus here!)
│ Formatting: 5ms  │ ← Fast
│ Cache: 2ms       │ ← Fast
└──────────────────┘
\`\`\`

## Database Optimization

### Query Optimization

\`\`\`sql
-- Slow: Full table scan
SELECT * FROM orders WHERE user_id = 123;

-- Fast: Use index
CREATE INDEX idx_orders_user_id ON orders(user_id);
SELECT id, total, created_at FROM orders WHERE user_id = 123;
\`\`\`

### Connection Pooling

\`\`\`javascript
// Bad: Create new connection per request
async function getUser(id) {
  const connection = await mysql.createConnection(config);
  const user = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
  await connection.end();
  return user;
}

// Good: Reuse pool connections
const pool = mysql.createPool(config);

async function getUser(id) {
  const connection = await pool.getConnection();
  const user = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
  connection.release();
  return user;
}
\`\`\`

## Caching Strategies

### Cache Levels

\`\`\`
1. Browser Cache (Static assets)
2. CDN Cache (Frequently accessed content)
3. Application Cache (In-memory, Redis)
4. Database Query Cache
5. Database (Source of truth)
\`\`\`

### Cache Invalidation Pattern

\`\`\`javascript
// Problem: How to invalidate cache when data changes?

// Solution 1: TTL
cache.set(key, value, ttl: 3600); // 1 hour

// Solution 2: Event-based
userService.on('updated', (userId) => {
  cache.invalidate(\`user:\${userId}\`);
});

// Solution 3: Dependency-based
cache.set('user:123', userData, {
  dependencies: ['user:123', 'user:123:permissions']
});
\`\`\`

## Frontend Optimization

### Code Splitting

\`\`\`javascript
// Bad: Load everything
import { LargeComponent } from './components';

// Good: Load on demand
const LargeComponent = React.lazy(() => 
  import('./components/LargeComponent')
);

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LargeComponent />
    </Suspense>
  );
}
\`\`\`

### Image Optimization

\`\`\`javascript
// Use Next.js Image component
import Image from 'next/image';

export function ProductImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      priority // Preload if above fold
      placeholder="blur" // Show blur while loading
    />
  );
}
\`\`\`

## API Performance

### Response Compression

\`\`\`javascript
// Compress responses with gzip
app.use(compression());

// Result: 100KB → 15KB
\`\`\`

### Pagination

\`\`\`javascript
// Bad: Return all results
GET /api/users

// Good: Paginate large datasets
GET /api/users?page=1&limit=20

app.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;
  
  const users = db.query(\`
    SELECT * FROM users 
    LIMIT ? OFFSET ?
  \`, [limit, offset]);
  
  res.json({
    data: users,
    page,
    limit,
    total: users.count()
  });
});
\`\`\`

## Load Testing

### Tools and Metrics

\`\`\`bash
# Apache Bench
ab -n 1000 -c 10 http://example.com/

# wrk (better alternative)
wrk -t4 -c100 -d30s http://example.com/

# Metrics to monitor
- Requests/sec
- Response time (avg, p95, p99)
- Error rate
- Saturation (CPU, Memory, Disk)
\`\`\`

## Horizontal Scaling

### Load Balancing

\`\`\`
┌──────────────┐
│ Load         │
│ Balancer     │
└──────┬───────┘
       │
   ┌───┼───┐
   │   │   │
┌──▼─┐ │ ┌─▼──┐
│App │ │ │App │
│ 1  │ │ │ 2  │
└────┘ │ └────┘
       │
    ┌──▼──┐
    │ App │
    │  3  │
    └─────┘
\`\`\`

## Monitoring and Alerting

### Key Metrics

\`\`\`javascript
const metrics = {
  responseTime: '125ms (p95)', // 95% of requests
  throughput: '5000 req/sec',
  errorRate: '0.01%',
  cpuUsage: '45%',
  memoryUsage: '2GB / 8GB',
  databaseConnections: '85/100'
};
\`\`\`

### Alert Thresholds

\`\`\`javascript
const alerts = [
  { metric: 'responseTime', threshold: '>500ms', severity: 'warning' },
  { metric: 'errorRate', threshold: '>1%', severity: 'critical' },
  { metric: 'cpuUsage', threshold: '>90%', severity: 'warning' },
  { metric: 'diskSpace', threshold: '<10%', severity: 'critical' }
];
\`\`\`

## Conclusion

Performance optimization is an ongoing process. By understanding your bottlenecks, profiling regularly, and implementing proven optimization patterns, you can build systems that scale effortlessly.
    `
  },
  {
    id: 5,
    slug: "building-scalable-rest-apis",
    title: "Building Scalable REST APIs with FastAPI",
    excerpt: "Learn best practices for designing robust and performant REST APIs using Python and FastAPI framework.",
    date: "March 15, 2024",
    author: "Limon Chandra Ray",
    category: "Backend",
    readTime: "8 min read",
    content: `
# Building Scalable REST APIs with FastAPI

REST APIs are the backbone of modern web applications. In this comprehensive guide, we'll explore how to build scalable, performant, and maintainable REST APIs using FastAPI, a modern Python web framework.

## What is FastAPI?

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It has several key advantages:

- **Automatic API Documentation**: FastAPI automatically generates interactive API documentation (Swagger UI and ReDoc)
- **Type Hints**: Built-in support for Python type hints ensures better code quality and IDE support
- **Performance**: Comparable to Node.js and Go frameworks
- **Async/Await**: Native support for async operations
- **Data Validation**: Automatic validation using Pydantic models

## Setting Up Your Project

\`\`\`bash
pip install fastapi uvicorn sqlalchemy
\`\`\`

## Creating Your First Endpoint

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    description: str = None

@app.get("/")
async def read_root():
    return {"message": "Welcome to FastAPI"}

@app.post("/items/")
async def create_item(item: Item):
    return item
\`\`\`

## Best Practices

### 1. Use Dependency Injection
FastAPI's dependency injection system allows you to create reusable components:

\`\`\`python
from fastapi import Depends

async def get_current_user(token: str = Depends(oauth2_scheme)):
    # Validate token and return user
    pass

@app.get("/users/me")
async def read_current_user(current_user = Depends(get_current_user)):
    return current_user
\`\`\`

### 2. Structure Your Code
Organize your API with routers:

\`\`\`python
from fastapi import APIRouter

router = APIRouter(prefix="/items", tags=["items"])

@router.get("/")
async def list_items():
    pass

app.include_router(router)
\`\`\`

### 3. Error Handling
Implement proper error handling with custom exceptions:

\`\`\`python
from fastapi import HTTPException

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id < 0:
        raise HTTPException(status_code=400, detail="Invalid item ID")
    return {"item_id": item_id}
\`\`\`

## Database Integration

Use SQLAlchemy with FastAPI for database operations:

\`\`\`python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
\`\`\`

## Performance Optimization

1. **Async/Await**: Use async functions for I/O operations
2. **Caching**: Implement caching strategies for frequently accessed data
3. **Pagination**: Always paginate large datasets
4. **Indexing**: Ensure proper database indexing
5. **Rate Limiting**: Implement rate limiting to prevent abuse

## Testing Your API

\`\`\`python
from fastapi.testclient import TestClient

client = TestClient(app)

def test_create_item():
    response = client.post(
        "/items/",
        json={"name": "Product", "price": 29.99}
    )
    assert response.status_code == 200
\`\`\`

## Deployment

Deploy FastAPI applications using:

- **Uvicorn**: ASGI server
- **Docker**: Containerization
- **Cloud Platforms**: AWS, Google Cloud, Azure, Heroku

## Conclusion

FastAPI provides a powerful and efficient way to build scalable REST APIs. By following these best practices and leveraging FastAPI's features, you can create robust APIs that scale with your application's needs.
    `
  },
  {
    id: 6,
    slug: "modern-react-patterns",
    title: "Modern React Patterns and Best Practices",
    excerpt: "Exploring functional components, hooks, and state management patterns that improve code quality and maintainability.",
    date: "March 10, 2024",
    author: "Limon Chandra Ray",
    category: "Frontend",
    readTime: "10 min read",
    content: `
# Modern React Patterns and Best Practices

React has evolved significantly over the years. In this guide, we'll explore modern patterns and best practices that will help you write cleaner, more maintainable React applications.

## Functional Components and Hooks

Functional components with hooks have become the standard way to write React applications. They provide a more intuitive and flexible approach compared to class components.

### Basic Hooks

#### useState Hook

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

#### useEffect Hook

\`\`\`javascript
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []); // Empty dependency array runs once on mount

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions:

\`\`\`javascript
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    },
    reset: () => setValue(initialValue)
  };
}

// Usage
function LoginForm() {
  const email = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" {...email.bind} />
      <input type="password" {...password.bind} />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## State Management Patterns

### Context API

For simple state management, the Context API is often sufficient:

\`\`\`javascript
import { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

### useReducer Hook

For complex state logic:

\`\`\`javascript
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
\`\`\`

## Performance Optimization

### React.memo

Prevent unnecessary re-renders:

\`\`\`javascript
const UserCard = React.memo(({ user }) => {
  console.log('Rendering UserCard');
  return <div>{user.name}</div>;
});
\`\`\`

### useMemo and useCallback

\`\`\`javascript
import { useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <div>
      {sortedItems.map(item => (
        <div key={item} onClick={handleClick}>{item}</div>
      ))}
    </div>
  );
}
\`\`\`

## Component Composition

Composition over inheritance is a key principle:

\`\`\`javascript
// Bad: Inheritance
class Button extends Component {
  // ...
}

// Good: Composition
function Button({ variant, size, children }) {
  return (
    <button className={clsx(variant, size)}>
      {children}
    </button>
  );
}

function PrimaryButton(props) {
  return <Button variant="primary" {...props} />;
}
\`\`\`

## Error Boundaries

Handle errors gracefully:

\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
\`\`\`

## Conclusion

Modern React emphasizes functional components, hooks, composition, and proper state management. By following these patterns, you'll write more maintainable and performant React applications.
    `
  },
  {
    id: 7,
    slug: "database-optimization",
    title: "Database Optimization Techniques",
    excerpt: "Tips and tricks for optimizing database queries, indexing strategies, and improving application performance.",
    date: "March 5, 2024",
    author: "Limon Chandra Ray",
    category: "Database",
    readTime: "12 min read",
    content: `
# Database Optimization Techniques

Database performance is crucial for application scalability. In this guide, we'll explore various techniques to optimize your database queries and improve overall application performance.

## Understanding Query Performance

### EXPLAIN and Query Analysis

Always analyze your queries before optimizing:

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.id, u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

The EXPLAIN output shows:
- Query execution plan
- Estimated row count
- Index usage
- Full table scans (to be avoided)

## Indexing Strategies

### Single Column Indexes

Create indexes on columns frequently used in WHERE clauses:

\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
\`\`\`

### Composite Indexes

For queries filtering on multiple columns:

\`\`\`sql
CREATE INDEX idx_orders_user_date 
ON orders(user_id, order_date);

-- This index is useful for queries like:
SELECT * FROM orders 
WHERE user_id = 1 AND order_date > '2024-01-01';
\`\`\`

### Index Best Practices

1. **Index Selectivity**: Create indexes on columns with high selectivity
2. **Avoid Over-indexing**: Too many indexes slow down write operations
3. **Monitor Index Usage**: Remove unused indexes
4. **Order Matters**: In composite indexes, order columns by selectivity

## Query Optimization Patterns

### 1. Avoid SELECT *

\`\`\`sql
-- Bad
SELECT * FROM users;

-- Good
SELECT id, name, email FROM users;
\`\`\`

### 2. Use Pagination

\`\`\`sql
-- Limit results to prevent loading entire table
SELECT id, name, email FROM users 
LIMIT 10 OFFSET 0;
\`\`\`

### 3. Filter Early

\`\`\`sql
-- Bad: Filter after join
SELECT u.id, u.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active' AND o.amount > 100;

-- Good: Filter in WHERE clause before join
SELECT u.id, u.name, o.amount
FROM users u
WHERE u.status = 'active'
JOIN orders o ON u.id = o.user_id
WHERE o.amount > 100;
\`\`\`

### 4. Use JOIN instead of Subqueries

\`\`\`sql
-- Slower: Subquery
SELECT id, name FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);

-- Faster: JOIN
SELECT DISTINCT u.id, u.name 
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.amount > 100;
\`\`\`

## Caching Strategies

### Query Result Caching

Implement caching for frequently accessed data:

\`\`\`python
import redis

def get_user(user_id):
    # Check cache first
    cached_user = redis.get(f"user:{user_id}")
    if cached_user:
        return json.loads(cached_user)
    
    # Query database
    user = db.query(User).filter(User.id == user_id).first()
    
    # Store in cache for 1 hour
    redis.setex(f"user:{user_id}", 3600, json.dumps(user))
    
    return user
\`\`\`

## Connection Pooling

Maintain a pool of database connections:

\`\`\`python
from sqlalchemy import create_engine

engine = create_engine(
    'postgresql://user:password@localhost/db',
    pool_size=20,
    max_overflow=40,
    pool_pre_ping=True  # Verify connections before using
)
\`\`\`

## Normalization and Denormalization

### Normalization

Reduces data redundancy:

\`\`\`sql
-- Normalized: Separate tables
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount DECIMAL
);
\`\`\`

### Denormalization

Improves read performance by duplicating data:

\`\`\`sql
-- Denormalized: User info stored in orders table
ALTER TABLE orders ADD COLUMN user_name VARCHAR(100);
\`\`\`

## Batch Operations

Process data in batches:

\`\`\`python
# Bad: One insert per iteration
for user in users:
    db.add(user)
    db.commit()

# Good: Batch insert
db.bulk_insert_mappings(User, users)
db.commit()
\`\`\`

## Monitoring and Profiling

### Slow Query Log

Enable and monitor slow queries:

\`\`\`sql
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;
\`\`\`

## Conclusion

Database optimization requires understanding your data, analyzing query plans, and implementing the right techniques. Start with indexing, progress to query optimization, and implement caching as needed. Regular monitoring ensures your database stays performant as data grows.
    `
  },
  {
    id: 8,
    slug: "nextjs-typescript-guide",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to building type-safe, full-stack applications with Next.js and TypeScript.",
    date: "February 28, 2024",
    author: "Limon Chandra Ray",
    category: "Full Stack",
    readTime: "9 min read",
    content: `
# Getting Started with Next.js and TypeScript

Next.js combined with TypeScript provides a powerful foundation for building modern web applications. This guide covers everything you need to get started.

## Why TypeScript + Next.js?

### Benefits

1. **Type Safety**: Catch errors at development time, not in production
2. **Better IDE Support**: Excellent autocomplete and inline documentation
3. **Self-Documenting Code**: Types serve as documentation
4. **Refactoring Confidence**: Rename variables with confidence
5. **Scalability**: Easier to maintain large codebases

## Project Setup

### Create a New Project

\`\`\`bash
npx create-next-app@latest my-app --typescript
cd my-app
npm run dev
\`\`\`

### TypeScript Configuration

Next.js automatically creates a \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
\`\`\`

## Pages and Routing

### App Router (Next.js 13+)

\`\`\`typescript
// app/page.tsx
export default function Home() {
  return <h1>Welcome to Next.js</h1>;
}
\`\`\`

### Dynamic Routes

\`\`\`typescript
// app/posts/[id]/page.tsx
interface Props {
  params: {
    id: string;
  };
}

export default function Post({ params }: Props) {
  return <h1>Post {params.id}</h1>;
}
\`\`\`

## API Routes

### Creating API Endpoints

\`\`\`typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  // Process data
  return NextResponse.json({ success: true }, { status: 201 });
}
\`\`\`

### Route Parameters

\`\`\`typescript
// app/api/users/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ id: params.id });
}
\`\`\`

## Data Fetching

### Server-Side Data Fetching

\`\`\`typescript
// app/posts/page.tsx
interface Post {
  id: number;
  title: string;
  content: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  });
  
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

### Client-Side Data Fetching

\`\`\`typescript
'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Middleware

### Request/Response Processing

\`\`\`typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Add authentication check
  const token = request.cookies.get('token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};
\`\`\`

## Components with TypeScript

### Functional Component

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
\`\`\`

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T extends { id: string | number }>({
  items,
  renderItem
}: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Deployment

### Vercel Deployment

\`\`\`bash
vercel deploy
\`\`\`

## Conclusion

TypeScript and Next.js work seamlessly together to provide a type-safe, scalable foundation for modern web applications. Start with the basics and gradually incorporate more advanced features as your application grows.
    `
  }
];

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug);
}

export function getAllBlogs() {
  return blogs;
}
