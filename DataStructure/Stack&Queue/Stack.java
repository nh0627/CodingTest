package nh.java.datastructure;

/**
 * Stack: 
 * - Last In First Out 
 * - push() and pop() are the primary operations
 */
public class Stack {

	private int maxSize;
	private long[] stackArray;
	private int top; // represent the index position of the last item

	public Stack(int size) {
		this.maxSize = size;
		this.stackArray = new long[maxSize];
		this.top = -1;
	}
	
	public void push(long j) {
		top++;
		this.stackArray[top] = j;
	}
	
	public long pop() {
		int oldTop = top;
		top--;
		return stackArray[oldTop]; // the actual data is not removed, only the pointer is reduced
	}
	
	public long peak() {
		return stackArray[top];
	}
	
	public boolean isEmpty() {
		return (top == -1);
	}
	
	public boolean isFull() {
		return (maxSize-1 == top);
	}
}
